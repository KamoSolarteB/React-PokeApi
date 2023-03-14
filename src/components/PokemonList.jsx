import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonProvider";
import { PokemonCard } from "../components";

function PokemonList() {
  const { firstPokemons } = useContext(PokemonContext);

  return (
    <>
      <div className="card-list-pokemon container">
        {firstPokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
}

export default PokemonList;
