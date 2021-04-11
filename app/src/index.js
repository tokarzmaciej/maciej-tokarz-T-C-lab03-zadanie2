import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import users from './reducers/users'
import App from './components/App';
import Users from './components/Users';


const rootReducer = combineReducers({ users })
const store = createStore(rootReducer, applyMiddleware(thunk, createMiddleware()))
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
    <Users />
  </Provider>
  , rootEl
)
render()
store.subscribe(render)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

