import React, { useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";

const AxiosFetched = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const onClickHandler = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then((response) => response.data)
      .then((response) => {
        setPokemonList(response.results);
      });
  };

  console.log(pokemonList);

  return (
    <div className="item-2">
      <Link to="/home">Home</Link>
      <button onClick={onClickHandler}>
        Click aqui para obtener los pokemon con Axios
      </button>
      {pokemonList.length > 0 &&
        pokemonList.map((poke, index) => {
          return (
            <div key={index}>
              <p>{poke.name}</p>
            </div>
          );
        })}
      <Link to="/fetch">Link to Fetch</Link>
    </div>
  );
};

export default AxiosFetched;
