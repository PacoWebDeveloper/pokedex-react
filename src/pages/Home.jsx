import React from 'react'
import FormHome from '../components/FormHome'
import "./styles/Home.css"

const Home = () => {
  return (
    <main className='home'>
        <img src="/img/pokedex.png" alt="Pokedex" className='home-img' />
        <h2 className='home-subtitle'>Hi, trainer!</h2>
        <p className='home-text'>Give me your name to start</p>
        <FormHome />
    </main>
  )
}

export default Home