import type ICharacter from "@/interfaces/ICharacter";

export class RickAndMortyService {
  async getCharacters(pageNumber: number): Promise<ICharacter[]> {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
    );
    const formattedResponse = await response.json();

    return formattedResponse.results;
  }
}
