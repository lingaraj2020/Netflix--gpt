import { createSlice } from "@reduxjs/toolkit";



const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptmovieResult:null,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addgptmovieResult:(state,action)=>{
            state.gptmovieResult=action.payload;
        }
    }
})


export const {toggleGptSearchView,addgptmovieResult}=GptSlice.actions;
export default GptSlice.reducer;