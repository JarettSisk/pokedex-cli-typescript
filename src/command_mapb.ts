import { State } from "./state.js";

export async function commandMapB(state: State) {
    if(!state.prevLocationsUrl) {
        console.log("you're on the first page");
        return;
    };
    const locations = await state.PokeAPI.fetchLocations(state.prevLocationsUrl);
    for (let location of locations.results) {
        console.log(`${location.name}`);
    }
    state.nextLocationsUrl = locations.next;
    state.prevLocationsUrl = locations.previous;
};