import axios from "axios";
import { writeFileSync } from "fs";
import {
  Item,
  queryQuestItems,
  TaskObjectiveType,
} from "../queries/queryQuestItems";
import { Locales } from "../typings/Locales";
import { WikiResponse } from "../typings/WikiResponse";
import { Parser } from "../interpreter/parser";
import { Task } from "../queries/queryQuestItems";
import {
  StmtWithValue,
  StmtWithBody,
  StatementType,
  SquareLinkStmt,
} from "../interpreter/ast";

interface LinkObject {
  type: "link";
  content: string;
  // Only the title of the wiki page is stored to help reduce size of the file
  title: string;
}

interface BoldObject {
  type: "bold";
  content: string;
}

interface StringObject {
  type: "string";
  content: string;
}

interface GrayObject {
  type: "grayed";
  content: string;
}

interface MediumHeaderObject {
  type: "medHeader";
  body: LineObject[];
}

type LineObject =
  | LinkObject
  | BoldObject
  | StringObject
  | GrayObject
  | MediumHeaderObject;

interface QuestData {
  name: string;
  amountNeeded: number;
}

interface QuestItemData {
  locations: LineObject[][];
  id: string;
  shortName: string;
  name: string;
  quests: QuestData[];
}

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

  const data: Record<string, QuestItemData> = {};

  // Fetch wiki data for each item needed
  for (const item of itemsWithObjectives) {
    const locationData = await fetchWikiData(item, locales);

    data[item.id] = {
      id: item.id,
      name: item.name,
      shortName: item.shortName,
      quests: getQuestAmountData(item, taskData),
      locations: locationData,
    };
  }

  writeFileSync(`data.json`, JSON.stringify(data, null, 4));
};

const getQuestAmountData = (item: Item, tasks: Task[]): QuestData[] => {
  const data: QuestData[] = [];

  tasks.forEach((task) => {
    const questData: QuestData = { name: task.name, amountNeeded: 0 };

    task.objectives.forEach((objective) => {
      // Objective is item based
      if (itemBasedObjectives.includes(objective.type)) {
        if (objective.item?.id === item.id && objective.count) {
          questData.amountNeeded += objective.count;
        }
      }
    });

    if (questData.amountNeeded > 0) {
      data.push(questData);
    }
  });

  return data;
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

  const locationData = parseWikiContent(wikiContent, item, locales);

  return locationData;
};

// Parses and extracts the location data from the wiki
const parseWikiContent = (
  content: string,
  item: Item,
  locales: Locales
): LineObject[][] => {
  const contentAST = Parser.createAST(content);

  writeFileSync("contentAST.json", JSON.stringify(contentAST, null, 2));

  const startIndex = contentAST.body.findIndex((b) => {
    if (b.kind === "LargeHeading") {
      const bodyStmt = b as StmtWithBody;

      return (bodyStmt.body[0] as StmtWithValue).value === "Location";
    }
  });

  if (startIndex < 0) {
    // Item has no location data on the wiki
    return [];
  }

  const endIndex = contentAST.body.slice(startIndex + 1).findIndex((b) => {
    return b.kind === "LargeHeading";
  });

  if (endIndex < 0) {
    return [];
  }

  const locationSlice = contentAST.body.slice(
    startIndex + 2, // Add 2 to remove the heading and initial line break
    endIndex + startIndex + 1
  );

  const wikiLines = createLines(locationSlice);

  const parsedLines = wikiLines.map((l) => parseWikiLine(l, item, locales));

  return parsedLines.filter((l) => l.length > 0);
};

// Serparates tokens between line breaks into their own arrays
const createLines = (ast: StatementType[]) => {
  const lines: StatementType[][] = [[]];

  let cursor = 0;

  while (cursor < ast.length) {
    const currentToken = ast[cursor];

    if (currentToken.kind !== "LineBreak") {
      lines[lines.length - 1].push(currentToken);
    } else {
      lines.push([]);
    }

    cursor++;
  }

  return lines;
};

// Resolves the AST slice of each line into a format we can parse into whatever string format we want
const parseWikiLine = (line: StatementType[], item: Item, locales: Locales) => {
  const parsedLine: LineObject[] = [];

  let cursor = 0;

  while (cursor < line.length) {
    const currentToken = line[cursor];

    switch (currentToken.kind) {
      case "StringContent":
        const st = currentToken as StmtWithValue;
        const lastParsed = parsedLine[parsedLine.length];

        if (lastParsed && lastParsed.type === "string") {
          parsedLine[parsedLine.length] = {
            type: "string",
            content: `${lastParsed.content}${st.value}`,
          };
        } else {
          parsedLine.push({ type: "string", content: st.value });
        }
        break;
      case "CurlyLink":
        const cl = currentToken as StmtWithValue;

        if (cl.value === "PAGENAME") {
          // {{PAGENAME}} resolves to the item's name
          parsedLine.push({ type: "string", content: item.shortName });
        } else {
          const resolvedID = locales.templates[cl.value];

          if (resolvedID) {
            parsedLine.push({
              type: "link",
              content: resolvedID.ShortName.toString(),
              title: resolvedID.Name.replace(" ", "_"),
            });
          }
        }
        break;
      case "SquareLink":
        const sl = currentToken as SquareLinkStmt;

        parsedLine.push({
          type: "link",
          content: sl.display,
          title: sl.title.replace(" ", "_"),
        });
        break;
      case "MediumHeading":
        const ml = currentToken as StmtWithBody;

        parsedLine.push({
          type: "medHeader",
          body: parseWikiLine(ml.body, item, locales).filter((t) => {
            if (t.type !== "string") return true;
            // Remove whitespace in headings, not the best solution, but it'll work for now
            if (t.content === " ") return false;
          }),
        });
        break;
    }

    cursor++;
  }

  return parsedLine;
};
