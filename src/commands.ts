import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { CLICommand } from "./state.js";
import { commandMap } from "./command_map.js";
import { commandMapB } from "./command_mapb.js";


export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays a list of locations and steps forward",
      callback: commandMap
    },
    mapb: {
      name: "mapb",
      description: "Displays the previous list of locations and steps backward",
      callback: commandMapB
    }
  };
}