import { createSlice, nanoid } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(todo) {
        return {
          payload: {
            id: nanoid(),
            todo,
          },
        }
      },
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1)
    },
    editTodo: (state, action) => {
      const { id, todo } = action.payload
      const existingTodo = state.find((todo) => todo.id === id)
      if (existingTodo) {
        existingTodo.todo = todo
      }
    },
  },
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
