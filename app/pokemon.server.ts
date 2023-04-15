import { PaginatedResponse } from "~/types/results";

export const URL = "https://pokeapi.co/api/v2";

export async function fetchPokemon(): Promise<PaginatedResponse> {
  const response = await fetch(`${URL}/pokemon/`, {
    method: "GET",
    cache: "force-cache"
  });

  const json = await response.json();

  return json;
}
