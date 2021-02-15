import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { editTodo } from "./todoSlice"

export const EditTodo = ({ match }) => {
  const { todoId } = match.params

  const [todo, setTodo] = useState("")

  const onTodoChange = (e) => setTodo(e.target.value)

  const dispatch = useDispatch()

  const onChangeSave = () => {
    dispatch(editTodo({ id: todoId, todo }))
    history.push(`/todo/${todoId}`)
  }

  const history = useHistory()

  return (
    <div>
      <input value={todo} onChange={onTodoChange} />
      <button onClick={onChangeSave}>Save Edit</button>
    </div>
  )
}
