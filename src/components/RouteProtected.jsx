import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
//Componente que protege las rutas
const RouteProtected = () => {
  //Obtener estado global
  const nameTrainer = useSelector(state => state.nameTrainer)

  if (nameTrainer) {
    return <Outlet />
  } else {
    return <Navigate to='/' />
  }
  
}

export default RouteProtected