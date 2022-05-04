import React, { useState } from "react";
import Pokemon from './Pokemon'




function PokeyList({pokeyArr, removePokey}) {

  const pokemonArr = pokeyArr.map(obj => {
    return ( <Pokemon 
      pokemonName={obj.name} 
      removePokemon={removePokey}
      key={obj.id}
      id={obj.id}
    />)
  })

  return (
    <>
      <div className="tasks">
        From PokeyList
        {pokemonArr}
      </div>
    </>
  )
}

export default PokeyList