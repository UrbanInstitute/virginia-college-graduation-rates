import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import UrbanBar from './components/UrbanBar'
import Home from './pages/Home'

import browserHistory from './browserHistory'
import store from './store'

import './App.scss'

function App() {
  return (
    <Router history={browserHistory}>
      <Provider store={store}>
        <div className="App">
          <UrbanBar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App
