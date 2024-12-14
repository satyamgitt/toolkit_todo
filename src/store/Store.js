const { configureStore } = require("@reduxjs/toolkit");

import todoReducer from "../feature/todoslice.js"

export default store = configureStore({
    reducer: {
        todo: todoReducer
    }
})