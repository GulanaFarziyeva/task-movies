import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modals: []
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        append: (state, action) =>{
            state.modals = [...state.modals, action.payload] 
        },

        destroy: state =>{
            const data =[...state.modals];
            data.pop();
            state.modals = data

        }
    }
})

export const {append, destroy} = modalSlice.actions;
export default modalSlice.reducer;