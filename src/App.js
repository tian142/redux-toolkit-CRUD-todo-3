import "./App.css"
import { Navbar } from "./Navbar"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route />
        </Switch>
      </Router>
    </div>
  )
}

export default App
