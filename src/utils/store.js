import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import searchSlice from "./searchSlice"
import suggestionSlice from "./suggestionSlice"


const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        suggestion: suggestionSlice,
    }
})


export default store 