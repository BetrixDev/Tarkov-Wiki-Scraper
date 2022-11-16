import axios from "axios";
import { writeFileSync } from "fs";
import {
  Item,
  queryQuestItems,
  TaskObjectiveType,
} from "../queries/queryQuestItems";
import { Locales } from "../typings/Locales";
import { WikiResponse } from "../typings/WikiResponse";

interface LinkObject {
  type: "link";
  content: string;
  url: string;
}

interface BoldObject {
  type: "bold";
  content: string;
}

interface GrayObject {
  type: "grayed";
  content: string;
}

type TokenObject = LinkObject | BoldObject | GrayObject;

const itemBasedObjectives: readonly TaskObjectiveType[] = [
  "buildWeapon",
  "findItem",
];

export const questItems = async () => {
  // Query initial data from tarkov.dev
  const { items: itemData, tasks: taskData, locales } = await queryQuestItems();

  // Any item that is required to be found for a quest will be stored here
  const itemsWithObjectives = new Set<Item>();

  taskData.forEach((task) => {
    task.objectives.forEach((objective) => {
      // Objective is item based
      if (itemBasedObjectives.includes(objective.type)) {
        // Add item to unique Set
        itemsWithObjectives.add(itemData[objective.item!.id]);
      }
    });
  });

  const data: Record<string, Array<string | TokenObject>> = {};

  // TODO: Use Promise.all()
  // Fetch wiki data for each item needed
  for (const item of itemsWithObjectives) {
    if (item.shortName !== "GPU") continue; // DEBUG REMOVE

    const wikiData = await fetchWikiData(item, locales);
    data[item.shortName] = wikiData as any;
  }

  writeFileSync(`data.json`, JSON.stringify(data, null, 4));
};

// Fetches the raw wiki content from the Fandom API
const fetchWikiData = async (item: Item, locales: Locales) => {
  console.log(item.shortName);

  const pageTitle = item.wikiLink.replace(
    "https://escapefromtarkov.fandom.com/wiki/",
    ""
  );
  // Grab raw reponse from the wiki API
  const reponse = await axios<WikiResponse>(
    `https://escapefromtarkov.fandom.com/api.php?action=query&prop=revisions&titles=${pageTitle}&rvprop=content&format=json&rvslots=*`
  );

  // Ugly one-liner to grab the actual content string
  const wikiContent = Object.values(reponse.data.query.pages)[0].revisions[0]
    .slots.main["*"];

  const locationData = parseWikiContent(wikiContent.split("\n"), item, locales);

  return locationData;
};

// Parses and extracts the location data from the wiki
const parseWikiContent = (content: string[], item: Item, locales: Locales) => {
  let startIndex: number | undefined;
  let endIndex: number | undefined;

  // Find this initial bounds for the location data
  content.forEach((line, i) => {
    if (line.includes("==Location==")) {
      startIndex = i + 1;
    } else if (
      startIndex !== undefined &&
      endIndex === undefined &&
      line.startsWith("==") &&
      !line.startsWith("===")
    ) {
      endIndex = i - 1;
    }
  });

  if (startIndex === undefined || endIndex === undefined) {
    // Return empty array indicating no location data for the item
    return [];
  }

  const locationSlice = content.slice(startIndex, endIndex);

  const parsedContent = locationSlice.map((line) =>
    parseWikiLine(line, item, locales)
  );

  return parsedContent;
};

// Parses each individual line from the wiki content into a mini AST
const parseWikiLine = (line: string, item: Item, locales: Locales) => {
  // {{PAGENAME}} is a global variable which correlates to the item name in this case
  line = line.replaceAll("{{PAGENAME}}", item.shortName);

  // Remove bullet character from beginning of line
  if (line.startsWith("* ")) {
    line = line.slice(2);
  } else if (line.startsWith("*")) {
    line = line.slice(1);
  }

  const parsedLine: Array<string | TokenObject> = [];

  parsedLine.push(line);

  const chars = line.split("");
  let lastTokenIndex = 0;

  // Use traditional for loop so we can mutate i within the loop
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    if (char === "{") {
      // Parse "{{GAME_ID}}"

      if (i !== 0) {
        // Push the last chunk of characters into the parsed array
        const d = chars.slice(lastTokenIndex, i - 1);
        parsedLine.push(d.join("") + " "); // Add a space since it gets cut off
      }

      const startIndex = chars.indexOf("{", i);
      const endIndex = chars.indexOf("}", i);
      const charsSlice = chars.slice(startIndex, endIndex);

      const targetID = charsSlice
        .join("")
        .replaceAll("{", "")
        .replaceAll("}", "");

      const targetLocale = locales.templates[targetID];

      if (targetLocale) {
        parsedLine.push({
          type: "link",
          url: wikiLinkFromName(targetLocale.Name),
          content: targetLocale.ShortName?.toString() ?? targetLocale.Name,
        });
      } else {
        parsedLine.push({
          type: "grayed",
          content: "UNKNOWN LINK",
        });
      }

      // Move forward cursor since we already sifted through these characters
      i = endIndex + 2;
      lastTokenIndex = endIndex + 2;
    } else if (char === "[") {
      // Parse "[[ITEM_NAME]]"

      if (i !== 0) {
        const d = chars.slice(lastTokenIndex, i - 1);
        parsedLine.push(d.join("") + " ");
      }

      const startIndex = i;
      const endIndex = chars.indexOf("]", i);
      const charsSlice = chars.slice(startIndex + 1, endIndex);

      const target = charsSlice
        .join("")
        .replaceAll("[", "")
        .replaceAll("]", "");

      const targetPageTitle = target.split("|")[0];
      let targetDisplayName: string;

      if (targetPageTitle === target) {
        targetDisplayName = targetPageTitle;
      } else {
        targetDisplayName = target.replace(`${targetPageTitle}|`, "");
      }

      parsedLine.push({
        type: "link",
        url: wikiLinkFromName(targetPageTitle),
        content: targetDisplayName,
      });

      i = endIndex;
      lastTokenIndex = endIndex + 2;
    }
    //  else if (char === "=") {
    //   // Parse ===[[MAP_NAME]]===
    //   console.log(line);
    // }
  }

  // If no special content was found, and the line isn't empty, push the entire line into the array
  if (parsedLine.length === 0 && line.length > 0) {
    parsedLine.push(line);
  }

  return parsedLine;
};

const wikiLinkFromName = (str: string) => {
  return `https://escapefromtarkov.fandom.com/wiki/${str.replaceAll(" ", "_")}`;
};
