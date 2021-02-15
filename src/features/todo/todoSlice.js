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
  },
})

export default todoSlice.reducer
