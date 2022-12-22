import { createSlice } from "@reduxjs/toolkit"

const nameTrainerSlice = createSlice({
    name: 'nameTrainer',
    initialState: '',
    reducers: {
        setNameTrainerGlobal: (state, action) => action.payload
        //EL payload funciona como un set de un estado local, y nameTrainer es nuestro estado en este caso
        //Basicamente es el parametro que se manda atraves de la action setNameTrainer
    }
})
export const {setNameTrainerGlobal} = nameTrainerSlice.actions
export default nameTrainerSlice.reducer