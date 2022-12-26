import React from 'react'
import './styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <img className='header-img' src="/img/pokedex.png" alt="poquedex" />
        <div className="header-black"></div>
        <div className="header-circle">
            <div className="header-cirlce-int"></div>
        </div>
    </header>
  )
}

export default Header