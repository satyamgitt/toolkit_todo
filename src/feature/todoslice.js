import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: nanoid(), text: "Satyam Is a Good Programer" }]
}


const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        AddDo: () => { },
        RemoveDo: () => { }
    }
})

export const { AddDo, RemoveDo } = todoSlice.actions

export default todoSlice.reducer