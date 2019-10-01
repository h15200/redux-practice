import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers/index'
import { Provider } from 'react-redux'


let store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


//                        REDUX without react-redux

//Steps in redux:
  // import createstore
  // make action, then reducer
  // let store = createstore(reducer)
  // now you can use store.getState(), store.subscribe(), store.disptach(action)


//Action

// const increment = () => {
//   return {type: 'INCREMENT'}
// }

// const decrement = () => {
//   return { type: 'DECREMENT'}
// }

// // Reducer

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }

// let store = createStore(counter)

// store.subscribe(()=> console.log(store.getState()))

// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())



ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>, document.getElementById('root'));

