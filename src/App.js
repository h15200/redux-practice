import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, signIn} from './actions/index'

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleSignIn = () => {
    dispatch(signIn())
  }

  return (
    <div>
      <h1 className="App">
        Counter: {counter}
      </h1>
      <button style={{fontSize:'2rem', margin:'0 2em'}} onClick={handleIncrement}>+</button>
      <button style={{fontSize: '2rem', margin: '0 2em'}} onClick={handleDecrement}>-</button>
      <button style={{fontSize: '2rem', margin: '0 2em'}} onClick={handleSignIn}>Sign In</button>
      {isLogged && <h2>Secret Info that you need to be logged in for!</h2>}
    </div>
  );
}

export default App;
