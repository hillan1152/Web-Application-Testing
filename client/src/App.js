import React, { useState } from 'react';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  // const addStrike = (strike) => {
  //   if(strike >=2){
  //     return 0
  //   } else {
  //     return strike + 1;
  //   }
  // }
  
  // const addBall = (ball) => {
  //   if(ball >=3){
  //     return 0
  //   } else {
  //     return ball + 1;
  //   }
  // }

  // const restart = (restart) => {
  //   setBalls(0);
  //   setStrikes(0);
  // }
  
  // const foulBall = (strike) => {
  //   if(strike < 2) {
  //     return strike + 1
  //   } else {
  //     return strike
  //   }
  // }

  // const hit = () => {
  //   restart() 
  // };
  return (
    <div className="App">
        <div className="balls">Balls: {balls}</div>
        <div className="strikes">Strikes: {strikes}</div>
        <Dashboard balls={balls} strikes={strikes} setBalls={setBalls} setStrikes={setStrikes}/>
    </div>
  );
}

export default App;

{/* <div className="balls">Balls: {balls}</div>
<div className="strikes">Strikes: {strikes}</div>

<button onClick={() => setStrikes(addStrike)}>STRIKE!</button>
<button onClick={() => setBalls(addBall)}>BALL!</button>
<button onClick={() => setStrikes(foulBall)}>Foul!</button>
<button onClick={() => hit(restart)}>Hit!</button> */}
