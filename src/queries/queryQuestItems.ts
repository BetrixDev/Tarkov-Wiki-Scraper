import axios from "axios";
import { request, gql } from "graphql-request";
import { Locales } from "../typings/Locales";

const ENDPOINT = "https://api.tarkov.dev/graphql";
const QUERY = gql`
  {
    tasks {
      name
      wikiLink
      trader {
        name
      }
      objectives {
        type
        optional
        ... on TaskObjectiveItem {
          item {
            id
          }
          foundInRaid
          count
          description
          optional
        }
        ... on TaskObjectiveBuildItem {
          item {
            id
          }
          description
          optional
        }
        ... on TaskObjectiveMark {
          markerItem {
            id
          }
          description
          optional
        }
      }
    }

    items {
      id
      wikiLink
      shortName
      name
      image512pxLink
    }
  }
`;

export type TaskObjectiveType =
  | "buildWeapon"
  | "traderLevel"
  | "shoot"
  | "visit"
  | "mark"
  | "extract"
  | "findItem"
  | "giveItem"
  | "findQuestItem"
  | "giveQuestItem";

export interface Task {
  name: string;
  wikiLink: string;
  trader: {
    name: string;
  };
  objectives: {
    type: TaskObjectiveType;
    optional: boolean;
    item?: {
      id: string;
    };
    foundInRaid?: boolean;
    count?: number;
    description?: string;
  }[];
}

export interface Item {
  id: string;
  wikiLink: string;
  shortName: string;
  name: string;
  image512pxLink: string;
}

export const queryQuestItems = async () => {
  const locales = await axios<Locales>(
    "https://dev.sp-tarkov.com/SPT-AKI/Server/raw/branch/development/project/assets/database/locales/global/en.json"
  ).then((res) => res.data);

  const { items: itemsArray, tasks } = await request<{
    items: Item[];
    tasks: Task[];
  }>(ENDPOINT, QUERY);

  const itemData: Record<string, Item> = {};

  itemsArray.forEach((item) => {
    itemData[item.id] = item;
  });

  return {
    items: itemData,
    tasks,
    locales,
  };
};
