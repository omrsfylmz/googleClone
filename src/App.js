import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/Search">
          <SearchPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App
