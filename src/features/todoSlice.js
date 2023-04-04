import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [
        { id: 1, title: "example todo", done: false },
        { id: 2, title: "example todo", done: false },
        { id: 3, title: "example todo", done: false },
        { id: 4, title: "example todo", done: true },
        { id: 1, title: "example todo", done: false },
        { id: 1, title: "example todo", done: true },
        { id: 1, title: "example todo", done: false },
        { id: 1, title: "example todo", done: false },

    ]
}

export const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        addTodo: (state, action) => {

            if (!action.payload.done) {
                action.payload.done = false
            } else {
                action.payload.done = true
            }




            const maxId = state.todos.reduce((maxId, item) => item.id > maxId ? item.id : maxId, 0)

            action.payload.id = maxId + 1

            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {

            state.todos.splice(action.payload, 1)

        },

        updateTodo: (state, action) => {
            console.log("updateeeee", state, action);

            // TODO Fill this field


        }

    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer