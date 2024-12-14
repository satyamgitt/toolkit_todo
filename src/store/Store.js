

import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../feature/todoslice.js"

const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})

export default store