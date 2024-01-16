import { configureStore } from '@reduxjs/toolkit'
import chipReducer from './chipSlice'

const store = configureStore({
    reducer: {
        chip: chipReducer,
    },
})

export default store