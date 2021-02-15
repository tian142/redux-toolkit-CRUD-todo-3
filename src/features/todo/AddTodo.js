import React, { useState } from "react"

import { useDispatch } from "react-redux"
import { addTodo } from "./todoSlice"

export const AddTodo = () => {
  const [todo, setTodo] = useState("")
  const onTodoChange = (e) => setTodo(e.target.value)

  const dispatch = useDispatch()
  const onTodoSubmit = (e) => {
    dispatch(addTodo(todo))
    setTodo("")
    e.preventDefault()
  }

  return (
    <form onSubmit={onTodoSubmit}>
      <input value={todo} onChange={onTodoChange} />
      <button type="submit">Add</button>
    </form>
  )
}
