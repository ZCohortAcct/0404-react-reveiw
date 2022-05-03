import React, { useState } from 'react'
// new data to use in form: https://pokeapi.co/api/v2/pokemon

function NewPokeyForm({onSubmitNewForm}) {
  const [formData, setFormData] = useState({
    pokeyName: '',
    pokeyUrl: '',
    pokeyBaseExperience: null,
    pokeyFirstAbility: '',
    pokeyFirstAbilityUrl: '',
    pokeySecondAbility: '',
    pokeySecondAbilityUrl: ''
  })

  const handNewFormChange = (e) => {
    const {name, value } = e.target
    const userInput = (e.target.type === 'number') ? parseInt(value) : value

    setFormData({...formData, [name]: userInput })
  }

  const handleSubmitOfNewForm = (e) => {
    e.preventDefault()

    const pokeyFromForm = {
      name: formData.pokeyName,
      url: formData.pokeyUrl,
      abilities: [
        {
          ability: {
            name:formData.pokeyFirstAbility,
            url: formData.pokeyFirstAbilityUrl
          }
        },
        {
          ability: {
            name: formData.pokeySecondAbility,
            url: formData.pokeySecondAbilityUrl
          }
        }
      ],
      base_experience: formData.pokeyBaseExperience
    }

    onSubmitNewForm(pokeyFromForm)

  }

  return (
    <div className="form-content" >
      <h3>Add a Pokemon Here</h3>
      <form onSubmit={handleSubmitOfNewForm}>
        <input
            type="text"
            name="pokeyName"
            placeholder='Pokemon Name'
            value={formData.pokeyName}
            onChange={handNewFormChange}
        />
        <input
          type="url"
          name="pokeyUrl"
          placeholder='Pokemon URL'
          value={formData.pokeyUrl}
          onChange={handNewFormChange}
        />
        <input
            type="number"
            name="pokeyBaseExperience"
            placeholder='Pokemon Base Experience'
            value={formData.pokeyBaseExperience}
            onChange={handNewFormChange}
        />
        <input
            type="text"
            name="pokeyFirstAbility"
            placeholder='Pokemon First Ability'
            value={formData.pokeyFirstAbility}
            onChange={handNewFormChange}
          />  
       <input
          type="url"
          name="pokeyFirstAbilityUrl"
          placeholder='Pokemon Ability URL'
          value={formData.pokeyFirstAbilityUrl}
          onChange={handNewFormChange}
        />
        <input
            type="text"
            name="pokeySecondAbility"
            placeholder='Pokemon Second Ability'
            value={formData.pokeySecondAbility}
            onChange={handNewFormChange}
        />  
        <input
          type="url"
          name="pokeySecondAbilityUrl"
          placeholder='Pokemon Ability URL'
          value={formData.pokeySecondAbilityUrl}
          onChange={handNewFormChange}
        />
        <button> Add Pokemon </button>    
      </form>
    </div>
  )
 
    
}

export default  NewPokeyForm;