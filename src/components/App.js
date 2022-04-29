import React  from 'react';
import { POKEMON } from '../data'
import PokeyList from './PokeyList'

function App() {
  // console.log(POKEMON)

  
  
  return (
    <div className="App">
      <h2>Check these Pokemon!</h2>
      <PokeyList pokemon={POKEMON} />
    </div>
  );
}

export default App;
