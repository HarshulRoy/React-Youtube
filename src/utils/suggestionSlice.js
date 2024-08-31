import { createSlice } from "@reduxjs/toolkit"

const suggestionSlice = createSlice({
    name:"suggestion",
    initialState:{
        result:[]
    },
    reducers:{
        storeVideo: (state, action)=>{
            state.result = action.payload
        },
    },
})

export const { storeVideo } = suggestionSlice.actions;
export default suggestionSlice.reducer