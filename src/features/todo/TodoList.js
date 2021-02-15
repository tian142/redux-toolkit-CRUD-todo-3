import React from "react"

import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteTodo } from "./todoSlice"

export const TodoList = () => {
  return (
    <div>
      <p>todo 1</p>
      <p>todo 2</p>
    </div>
  )
}
