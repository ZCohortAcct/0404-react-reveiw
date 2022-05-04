import React, { useEffect, useState }  from 'react';
// import { POKEMON } from '../data'
import PokeyList from './PokeyList'
import PokeyFilter from "./PokeyFilter";
import NewPokeyForm from "./NewPokeyForm";

function App() {
  // console.log(POKEMON)
  const [pokemon, setPokemon] = useState([])
  const [filterInput, setFilterInput] = useState('')


  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemonObjs => setPokemon(pokemonObjs))
    // .then(setPokemon)
  }, [])
  
  const removePokemonFromList = (pokemonId) => { // update to work with id, instead of names
    setPokemon(
      pokemon.filter((pokeyObj) => pokeyObj.id !== pokemonId)
    )
  }

  const filteredPokeyData = pokemon.filter(pokeyObj =>  pokeyObj.name.toLowerCase().includes(filterInput.toLowerCase()))

  const handlePokeyCreation = (newPokemon) => {
    // copy the list the list of pokemon & add new pokemon
    const copyOfPokeyData = [...pokemon, newPokemon]

    // setPokeyObjsArr(preData => preData = copyOfPokeyData)
    setPokemon(copyOfPokeyData)
  }

  return (
    <div className="App">
      <h2>Check these Pokemon!</h2>
      <PokeyFilter 
        filterInputFromList={filterInput} 
        setFilterInput={setFilterInput}
      />
      <PokeyList pokeyArr={filteredPokeyData} removePokey={removePokemonFromList} />
      <NewPokeyForm onSubmitNewForm={handlePokeyCreation}/>
    </div>
  );
}

export default App;
