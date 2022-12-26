import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../Layout/Header'
//Componente que protege las rutas
const RouteProtected = () => {
  //Obtener estado global
  const nameTrainer = useSelector(state => state.nameTrainer)

  if (nameTrainer) {
    return (
      <>
        <Header />
        <Outlet />
      </>
    )
  } else {
    return <Navigate to='/' />
  }
  
}

export default RouteProtected