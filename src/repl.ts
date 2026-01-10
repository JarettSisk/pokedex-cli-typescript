import { createInterface } from 'node:readline';
import { State } from './state';




export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(" ").filter(item => item);
}

export const startREPL = async (state: State) => {
    state.readline.prompt();

    state.readline.on('line', (input) => {
        const cleanedInput = cleanInput(input)[0];
        if(!cleanedInput) {
            state.readline.prompt();
        } else {
            const cmd = state.commands[cleanedInput];
            if(!cmd) {
                console.log("Unknown command");
                return
            } else {
                cmd.callback(state);
            }
            state.readline.prompt();
        }
    }); 
}