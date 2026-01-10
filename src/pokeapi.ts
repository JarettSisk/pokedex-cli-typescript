
export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    if (!pageURL) {
        pageURL = `${PokeAPI.baseURL}/location-area/`;
    }
    try {
        const response = await fetch(pageURL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result as ShallowLocations;

    } catch (error) {
        if(error instanceof Error) {
            console.error(error.message);
        }

        throw error;
    }
  }

//   async fetchLocation(locationName: string): Promise<Location> {
//     // implement this
//   }
}

export type Location = {
    name: string
    url: string
};

export type ShallowLocations = {
  count: number
  next: string
  previous: any
  results: Location[]
};

