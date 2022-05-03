import React, { useState } from 'react'

function NewPokeyForm({onPokeyFormSubmit}) {


  return (
    <div className="form-content">
      <h3>Add a Pokemon Here</h3>
      <form>
        <input
            type="text"
            name="pokeyName"
            placeholder='Pokemon Name'
          />
        <input
          type="url"
          name="pokeyUrl"
          placeholder='Pokemon URL'
        />
        <input
            type="number"
            name="pokeyBaseExperience"
            placeholder='Pokemon Base Experience'
        />
        <input
            type="text"
            name="pokeyFirstAbility"
            placeholder='Pokemon First Ability'
        />  
       <input
          type="url"
          name="pokeyFirstAbilityUrl"
          placeholder='Pokemon Ability URL'
        />
        <input
            type="text"
            name="pokeySecondAbility"
            placeholder='Pokemon Second Ability'
        />  
        <input
          type="url"
          name="pokeySecondAbilityUrl"
          placeholder='Pokemon Ability URL'
        />
        <button> Add Pokemon </button>    
      </form>
    </div>
  )
 
    
}

export default  NewPokeyForm;