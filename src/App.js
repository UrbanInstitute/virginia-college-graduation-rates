import React from 'react'
import {Router, Route, Switch, HashRouter} from 'react-router-dom'

import UrbanBar from './components/UrbanBar'
import Home from './pages/Home'

import browserHistory from './browserHistory'

import './App.scss'

function App() {
  return (
    <HashRouter history={browserHistory}>
      <div className="App">
        <UrbanBar/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App
