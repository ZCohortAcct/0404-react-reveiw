import React from "react";
import Pokemon from './Pokemon'

// need to pass down a prop from app
// copy past code from app (displaying pokey name functionality)
function PokeyList({pokemon}) {
  const pokemonArr = pokemon.map(obj => {
    // debugger
  return ( < Pokemon pokemonName={obj.name}/>

    // <div className="task"> 
    //   {obj.name}
    // </div>
    )
  })

  return (
    <div className="tasks">
      From PokeyList
      
      {pokemonArr}

    </div>
  )
}

export default PokeyList