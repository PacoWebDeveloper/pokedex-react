import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useState } from 'react'
import ListPokemons from '../components/ListPokemons'

const pokedex = () => {

  const [pokemons, setPokemons] = useState([])

  const nameTrainer = useSelector(state => state.nameTrainer)

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=115"
    axios.get(URL)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='pokedex-container'>
      <main>
        <header>
          <h1>Pokedex</h1>
          <p>Welcome <span>{nameTrainer}</span>, here you can find your favorite pokemon</p>
        </header>
        <ListPokemons pokemons={pokemons} />
      </main>
    </div>
  )
}

export default pokedex