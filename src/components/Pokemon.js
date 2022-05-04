import React from "react";


function Pokemon({pokemonName, removePokemon, id}) {
  return (
    <div className="task">
      
      <div className="label">More Details</div>
      <div className="text">{pokemonName}</div>
      <button className="delete" onClick={() => removePokemon(id)}>REMOVE</button>
    </div>
  )
}

export default Pokemon;