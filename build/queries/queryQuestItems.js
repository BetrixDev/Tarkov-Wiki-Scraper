"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryQuestItems = void 0;
const axios_1 = __importDefault(require("axios"));
const graphql_request_1 = require("graphql-request");
const ENDPOINT = "https://api.tarkov.dev/graphql";
const QUERY = (0, graphql_request_1.gql) `
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
const queryQuestItems = async () => {
    const locales = await (0, axios_1.default)("https://dev.sp-tarkov.com/SPT-AKI/Server/raw/branch/development/project/assets/database/locales/global/en.json").then((res) => res.data);
    const { items: itemsArray, tasks } = await (0, graphql_request_1.request)(ENDPOINT, QUERY);
    const itemData = {};
    itemsArray.forEach((item) => {
        itemData[item.id] = item;
    });
    return {
        items: itemData,
        tasks,
        locales,
    };
};
exports.queryQuestItems = queryQuestItems;
