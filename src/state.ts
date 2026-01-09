import { createInterface, type Interface } from "readline";
import { stdin, stdout } from 'node:process';
import { getCommands } from './commands.js';


export type State = {
    readline: Interface,
    commands: Record<string, CLICommand>
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export function initState(): State {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > ",
    });

    const commands = getCommands();

    return  {readline: rl, commands: commands}
} 