import { State } from "./state.js";

export async function commandMap(state: State) {
    const locations = await state.PokeAPI.fetchLocations(state.nextLocationsUrl);
    for (let location of locations.results) {
        console.log(`${location.name}`);
    }
    state.nextLocationsUrl = locations.next;
    state.prevLocationsUrl = locations.previous;
};