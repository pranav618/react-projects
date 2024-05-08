import { testReducer } from "./reducer";
import {configureStore} from "@reduxjs/toolkit"


export const store = configureStore({
    reducer:{
        reducer: testReducer
    }
})