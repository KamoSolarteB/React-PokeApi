import React, { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [firstPokemons, setFirstPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  // Call for the first 50 pokemons
  const getFirstPokemons = async (limit = 50) => {
    const url = "https://pokeapi.co/api/v2/";

    const response = await fetch(
      `${url}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    console.log(results);
    setFirstPokemons(results);
  };

  // Call all pokemons
  const getAllPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/";

    const response = await fetch(`${url}pokemon?limit=100000&offset=0`);
    const data = await response.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    console.log(results);
    setAllPokemons(results);
  };

  // First 50
  useEffect(() => {
    getFirstPokemons();
  }, []);
  // All
  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <PokemonContext.Provider
      value={{
        x: 10,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
