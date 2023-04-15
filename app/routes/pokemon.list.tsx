import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import { fetchPokemon } from "~/pokemon.server";

export const loader = async () => {
  const pokemonResources = await fetchPokemon();

  return json({
    pokeUrls: pokemonResources,
  });
};

export default function PokemonList() {
  const { pokeUrls } = useLoaderData<typeof loader>();
  return (
    <ul>
      {pokeUrls.results.map((pokemon) => (
        <li key={pokemon.name}>
          {pokemon.name}
        </li>
      ))}
    </ul>
  );
}
