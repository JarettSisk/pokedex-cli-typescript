import { State } from "./state.js";

export async function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!")
    console.log("Usage:")
    console.log("");
    for(let key in state.commands) {
        console.log(`${state.commands[key].name} ${state.commands[key].description}`);
    }
};