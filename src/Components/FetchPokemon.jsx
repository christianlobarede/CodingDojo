import React, { useEffect, useState } from "react";

const FetchPokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then((response) => response.json())
      .then((response) => setPokemonList(response.results));
  }, []);

  console.log(pokemonList);

  return (
    <div>
      {pokemonList.length > 0 &&
        pokemonList.map((poke, index) => {
          return (
            <div key={index}>
              <p>{poke.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default FetchPokemon;
