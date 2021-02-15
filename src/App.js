import "./App.css"
import React from "react"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"

import { Navbar } from "./Navbar"
import { AddTodo } from "./features/todo/AddTodo"
import { TodoList } from "./features/todo/TodoList"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddTodo />
                <TodoList />
              </>
            )}
          />

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
