import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <Link to="/">Home</Link>
      <hr />
    </div>
  )
}
