import { createSlice } from "@reduxjs/toolkit";



const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieResult:null,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addmovieResult:(state,action)=>{
            state.movieResult=action.payload;
        }
    }
})


export const {toggleGptSearchView,addmovieResult}=GptSlice.actions;
export default GptSlice.reducer;