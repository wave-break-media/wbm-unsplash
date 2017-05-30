import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import {Route, HashRouter as Router} from 'react-router-dom'
import rootReducer from './reducers/root'
import Layout from './components/Layout'
import PhotoList from './components/PhotoList'
import './index.css'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

const routes = [
  {
    path: '/',
    exact: true,
    child: PhotoList
  },
  {
    path: '/photos/:page',
    exact: false,
    child: PhotoList
  }
];

render(
  <Provider store={store}>
    <Router>
      <Route path='/' render={props => (
        <Layout {...props} routes={routes} />
      )}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
