import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemons, Pokemon } from "../../../types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemons: builder.query<Pokemons, number>({
      query: (limit) => `pokemon?limit=${limit ? limit : 10}`,
    }),
    getPokemon: builder.query<Pokemon, number>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonApi;
