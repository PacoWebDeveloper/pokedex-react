import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/PokemonCard.css'

const PokemonCard = ({pokemon}) => {

  const [dataPokemon, setDataPokemon] = useState()

  useEffect(() => {
    axios.get(pokemon.url)
      .then(res => setDataPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  const types = dataPokemon?.types.map(type => type.type.name).join(" / ")

  return (
    <article className='pokeCard'>
      <section className='pokeCard-header'></section>
      <section className='pokecard-content'>
        <img src={dataPokemon?.sprites.other["official-artwork"].front_default} alt="" className='pokeCard-img'/>
        <h3>{pokemon.name}</h3>
        <p className="pokeCard-types">{types}</p>        
        <p className="pokeCard-types-title">Type</p>
        <hr />
        <section className='pokeCard-stats'>
          {
            
          }
          <div className="pokeCard-stat">
            <p className='pokeCard-stat-name'></p>
            <p className='pokeCard-stat-value'></p>
          </div>
        </section>
      </section>
    </article>
  )
}

export default PokemonCard