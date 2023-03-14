import React, { createContext, useState, useEffect } from "react";
import { useForm } from "../Hooks";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [firstPokemons, setFirstPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  // Use of CustomHook - useForm
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  // Simple statements for application
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

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
    setFirstPokemons([...firstPokemons, ...results]);
    setLoading(false);
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
    setAllPokemons(results);
    setLoading(false);
  };

  // Call pokemon by id
  const getPokemonById = async (id) => {
    const url = "https://pokeapi.co/api/v2/";

    const response = await fetch(`${url}pokemon/${id}`);
    const data = await response.json();
    return data;
  };

  // First 50
  useEffect(() => {
    getFirstPokemons();
  }, []);
  // All
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        getPokemonById,
        firstPokemons,
        allPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
