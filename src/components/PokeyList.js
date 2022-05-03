import React, { useState } from "react";
import Pokemon from './Pokemon'
import PokeyFilter from "./PokeyFilter";
import NewPokeyForm from "./NewPokeyForm";



function PokeyList({pokemon}) {
  // what should be stored in state ~> entire collection of pokeyObjs
  // set____ is to be used when you need to UPDATE / SET the state
  const [pokeyObjsArr, setPokeyObjsArr] = useState(pokemon)

  const removePokey = (nameOfPokemon) => {
    // console.log(nameOfPokemon)
    // const updatedArr = pokeyObjsArr.filter( (pokeyObj) => {
    //  // return a collection of objs that MATCH or do NOT match conditonal
    //   // do NOT want pokeyObj NAME to match our INPUT
    //   // CONDITIONAL SYNTX: comparions txt OPERATOR comparions txt
    //   return pokeyObj.name !== nameOfPokemon
    // })

    setPokeyObjsArr(pokeyObjsArr.filter((pokeyObj) => pokeyObj.name !== nameOfPokemon))
    debugger
    // setPokeyObjsArr(preArr => preArr = updatedArr)
    // setPokeyObjsArr(updatedArr)
    // console.log(updatedArr)
  }
  
  const pokemonArr = pokeyObjsArr.map(obj => {
  return ( < Pokemon pokemonName={obj.name} removePokemon={removePokey} key={obj.name}/>)
  })


  return (
    <>
      <div className="tasks">
      <PokeyFilter />
        From PokeyList
        
        {pokemonArr}

      </div>
      <NewPokeyForm />
    </>
  )
}

export default PokeyList