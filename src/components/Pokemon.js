import React from "react";


function Pokemon({pokemonName}) {
  return (
    <div className="task">
      
      <div className="label">More Details</div>
      <div className="text">{pokemonName}</div>
      <button className="delete">REMOVE</button>
    </div>
  )
}

export default Pokemon;