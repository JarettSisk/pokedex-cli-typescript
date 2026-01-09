import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
import { getCommands } from './commands.js';

const rl = createInterface({
  input: stdin,
  output: stdout,
  prompt: "Pokedex > ",
});

export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(" ").filter(item => item);
}

export const startREPL = () => {
    const commands = getCommands();

    rl.prompt();
    rl.on('line', (input) => {
        const cleanedInput = cleanInput(input)[0];
        if(!cleanedInput) {
            rl.prompt();
        } else {
            const cmd = commands[cleanedInput];
            if(!cmd) {
                console.log("Unknown command");
                return
            } else {
                cmd.callback(commands);
            }
            rl.prompt();
        }
    }); 
}