import React from "react"

import { useSelector, useDispatch } from "react-redux"
import { deleteTodo } from "./todoSlice"
import { Link } from "react-router-dom"

export const TodoList = () => {
  const todos = useSelector((state) => state.todo)

  const dispatch = useDispatch()

  const mapTodos = todos.map((todo, index) => (
    <section key={todo.id}>
      <span>{todo.todo}</span>
      <Link to={`/todo/${todo.id}`}>View</Link>
      <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
    </section>
  ))

  return <div>{mapTodos}</div>
}
