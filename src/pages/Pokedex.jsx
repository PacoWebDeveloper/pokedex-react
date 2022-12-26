import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useState } from 'react'
import ListPokemons from '../components/ListPokemons'
import './styles/Pokedex.css'

const pokedex = () => {

  const [pokemons, setPokemons] = useState([])
  const [types, setTypes] = useState([])
  const [namePokemon, setNamePokemon] = useState('')
  const [pokemonFilter, setPokemonFilter] = useState([])
  const [pokemonType, setPokemonType] = useState('')

  const nameTrainer = useSelector(state => state.nameTrainer)

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.namePokemon.value
    setNamePokemon(name)
  }

  const handleChangeSelect = (e) => {
   setPokemonType(e.target.value)
  }

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/${pokemonType ? `type/${pokemonType}/` : "pokemon/?limit=30"}`
    axios.get(URL)
      .then(res => {
        if (pokemonType) {
          const newPokemons = res.data.pokemon.map(pokemon => pokemon.pokemon)
          setPokemons(newPokemons)
        } else {
          setPokemons(res.data.results)
        }
      })
      .catch(err => console.log(err))
  }, [pokemonType])

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type/"
    axios.get(URL)
      .then(res => setTypes(res.data.results))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    const newPokemons = pokemons.filter(pokemon => pokemon.name.includes(namePokemon))
    setPokemonFilter(newPokemons)
  }, [namePokemon, pokemons])

  return (
      <main>
        <header>
          <h1>Pokedex</h1>
          <p>Welcome <span>{nameTrainer}</span>, here you can find your favorite pokemon</p>
          <form onSubmit={handleSubmit} className='pokedex-form'>
            <div className="pokedex-search">
              <input type="text" id='namePokemon'/>
              <button type='submit'>Search</button>
            </div>
            <select onChange={handleChangeSelect} className="pokedex-select">
              <option value="">All pokemons</option>
              {
                types.map(type => <option value={type.name} key={type.url}>{type.name}</option>)
              }
            </select>
          </form>
        </header>
        <ListPokemons pokemons={pokemonFilter} />
      </main>
  )
}

export default pokedex