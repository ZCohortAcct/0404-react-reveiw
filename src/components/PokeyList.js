import React, { useState } from "react";
import Pokemon from './Pokemon'
import PokeyFilter from "./PokeyFilter";
import NewPokeyForm from "./NewPokeyForm";



function PokeyList({pokemon}) {
  const [pokeyObjsArr, setPokeyObjsArr] = useState(pokemon)

  //  purpose of setFilterInput is to UPDATE filterInput varibale
  // filterInput === userInput from form
  const [filterInput, setFilterInput] = useState('')

  // want to filter pokeyObjsArr
  // update DOM, as user types into search input box
  // the user typing out letters 
  const filteredArr = () => {
    return pokeyObjsArr.filter(pokemonObj => pokemonObj.name.toLowerCase().includes(filterInput.toLowerCase()) )
  }

  const filteredPokeyData = pokeyObjsArr.filter(pokeyObj =>  pokeyObj.name.toLowerCase().includes(filterInput.toLowerCase()))

  // filterInput = 'm'
  // 'metapod'.inlcudes('m') //=> true

  const removePokey = (nameOfPokemon) => {
    setPokeyObjsArr(
      pokeyObjsArr.filter((pokeyObj) => pokeyObj.name !== nameOfPokemon)
    )
  }
  
  // const pokemonArr = filteredArr().map(obj => {
  const pokemonArr = filteredPokeyData.map(obj => {
    return ( < Pokemon 
      pokemonName={obj.name} 
      removePokemon={removePokey}
      key={obj.name}
    />)
  })

  const handlePokeyCreation = (newPokemon) => {
    // copy the list the list of pokemon & add new pokemon
    const copyOfPokeyData = [...pokeyObjsArr, newPokemon]

    // setPokeyObjsArr(preData => preData = copyOfPokeyData)
    setPokeyObjsArr(copyOfPokeyData)
  }

  return (
    <>
      <div className="tasks">
      <PokeyFilter 
        filterInputFromList={filterInput} 
        setFilterInput={setFilterInput}
      />
        From PokeyList
        
        {pokemonArr}

      </div>
      <NewPokeyForm onSubmitNewForm={handlePokeyCreation}/>
    </>
  )
}

export default PokeyList