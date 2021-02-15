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
  },
})

export default todoSlice.reducer
