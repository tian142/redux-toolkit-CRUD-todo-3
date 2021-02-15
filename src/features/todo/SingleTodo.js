import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export const SingleTodo = ({ match }) => {
  const { todoId } = match.params

  const todo = useSelector((state) =>
    state.todo.find((todo) => todo.id === todoId)
  )

  return (
    <div>
      {todo.todo}
      <Link to={`/edit/${todo.id}`}>Edit</Link>
    </div>
  )
}
