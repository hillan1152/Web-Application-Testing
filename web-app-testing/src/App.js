import React, { useState } from 'react';
import './App.css';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const addStrike = (strike) => {
    if(strike >= 2) {
      return 0
    } else {
      return strike + 1
    }
  }

  const addBall = (ball) => {
    if(ball >= 3) {
      return 0
    } else {
      return ball + 1
    }
  }

  const restart = (restart) => {
    setStrikes(restart);
    setBalls(restart);
  }

  const foulBall = (strike) => {
    if(strike < 2){
      return strike + 1
    } else {
      return strike
    }
  }

  const hit = () => {
    return 0
  }
  
  return (
    <div className="App">
      <div className= "balls">Balls: {balls}</div>
      <div className= "strikes">Strikes: {strikes}</div>

      <button onClick={() => setStrikes(addStrike)}>Strike</button>
      <button onClick={() => setBalls(addBall)}>Ball</button>
      <button onClick={() => setStrikes(foulBall)}>Foul</button>
      <button onClick={() => restart(hit)}>Hit</button>
    </div>
  );
}

export default App;
