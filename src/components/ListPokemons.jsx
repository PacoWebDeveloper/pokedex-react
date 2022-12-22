import React from 'react'
import PokemonCard from './PokemonCard'

const ListPokemons = ({pokemons}) => {
  return (
    <ul>
        {
            pokemons.map((pokemon) => <PokemonCard key={pokemon.url} pokemon={pokemon} />)
        }
    </ul>
  )
}

export default ListPokemons