import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import "./styles/FormHome.css"

const FormHome = () => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const nameTreiner = e.target.nameTrainer.value.trim()
        dispatch(setNameTrainerGlobal(nameTreiner))
    }
  return (
    <form className='home-form' onSubmit={handleSubmit}>
        <input className='home-input' type="text" name="nameTrainer" id='nameTrainer' placeholder='Your name' required />
        <button className='home-btn'>Start!</button>
    </form>
  )
}

export default FormHome