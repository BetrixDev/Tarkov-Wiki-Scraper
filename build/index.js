"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questItems_1 = require("./modules/questItems");
const modules = {
    questItems: questItems_1.questItems,
};
const main = async () => {
    const functionsToRun = [];
    process.argv.forEach((arg) => {
        if (modules[arg]) {
            functionsToRun.push(modules[arg]);
        }
    });
    for (const func of functionsToRun) {
        await func();
    }
    // await Promise.all(functionsToRun);
};
main();
