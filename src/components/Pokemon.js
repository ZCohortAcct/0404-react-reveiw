import React from "react";


function Pokemon({pokemonName, removePokemon}) {
  return (
    <div className="task">
      
      <div className="label">More Details</div>
      <div className="text">{pokemonName}</div>
      <button className="delete" onClick={() => removePokemon(pokemonName)}>REMOVE</button>
    </div>
  )
}

export default Pokemon;