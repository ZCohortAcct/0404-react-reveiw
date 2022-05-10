import React from "react";


function Pokemon({pokemonName, removePokemon, id}) {
  // persistance delete

  const handleDeleteBtn = () => {
    // I need the ID

    fetch(`http://localhost:3004/pokemon/${id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(emptyObj => removePokemon(id))
    // update state
  }

  return (
    <div className="task">
      
      <div className="label">More Details</div>
      <div className="text">{pokemonName}</div>
      {/* <button className="delete" onClick={() => removePokemon(id)}>REMOVE</button> */}
      <button className="delete" onClick={handleDeleteBtn}>REMOVE</button>
    </div>
  )
}

export default Pokemon;