import { createSlice } from '@reduxjs/toolkit'
import { profileList } from '../utils/items'

const initialState = {
    items: profileList
}

export const chipSlice = createSlice({
    name: 'chip',
    initialState,
    reducers: {
        addChip: (state, action) => {
            state.items = state.items.map(item => {
                if (item.id === action.payload) {
                    item.inlist = true
                }
                return item
            })
        },
        removeChip: (state, action) => {
            state.items = state.items.map(item => {
                if (item.id === action.payload) {
                    item.inlist = false
                }
                return item
            })
        },
    },
})

export const { addChip, removeChip } = chipSlice.actions
export default chipSlice.reducer