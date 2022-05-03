import React from "react";

function PokeyFilter({filterInputFromList, setFilterInput}) {
  
  const handFilterFormChange = (e) => {
    setFilterInput(e.target.value)
  }

  return (<div className="categories">
    <input
        type="text"
        name="search"
        placeholder="Search..."
        value={filterInputFromList}
        // onChange={(e) => setFilterInput(e.target.value)}
        onChange={handFilterFormChange}
    />
  </div>)
}

export default PokeyFilter;