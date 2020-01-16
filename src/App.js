import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'

import UrbanBar from './components/UrbanBar'
import Home from './pages/Home'

import browserHistory from './browserHistory'

import './App.scss'

function App() {
  return (
    <Router history={browserHistory} basename={"features/college-metrics-dashboard"}>
      <div className="App">
        <UrbanBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
