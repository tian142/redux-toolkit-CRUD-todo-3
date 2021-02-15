import "./App.css"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"

import { Navbar } from "./Navbar"
import { AddTodo } from "./features/todo/AddTodo"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <AddTodo />} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
