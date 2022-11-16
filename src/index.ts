import { questItems } from "./modules/questItems";

type FunctionReturn = () => Promise<void>;

const modules: Record<string, FunctionReturn> = {
  questItems,
};

const main = async () => {
  const functionsToRun: FunctionReturn[] = [];

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
