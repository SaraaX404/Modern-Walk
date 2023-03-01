import { configureStore } from '@reduxjs/toolkit'
import ClothesReducer from './Slices/clothesSlice'

export const store = configureStore({
    reducer: {clothes: ClothesReducer},
})

export default store

