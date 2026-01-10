// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import { initState } from "./state.js";


async function main() {
  const state = initState();
  try {
    await startREPL(state);
  } catch (error) {
      if(error instanceof Error) {
            console.error(error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
  }
}

await main();