import React from 'react';

const Dashboard = (props, { setStrikes, setBalls }) => {
    const addStrike = (strike) => {
        console.log('Made it in Strike')
        if(strike >=2){
          return 0
        } else {
          return strike + 1;
        }
      }
      
      const addBall = (ball) => {
        if(ball >=3){
          return 0
        } else {
          return ball + 1;
        }
      }
    
      const restart = () => {
        props.setBalls(0);
        props.setStrikes(0);
      }
      
      const foulBall = (strike) => {
        if(strike < 2) {
          return strike + 1
        } else {
          return strike
        }
      }
    
    const hit = () => {
        restart() 
      };
    return(
        <div className="dashboard">
            <button onClick={() => props.setStrikes(addStrike)}>STRIKE!</button>
            <button onClick={() => props.setBalls(addBall)}>BALL!</button>
            <button onClick={() => props.setStrikes(foulBall)}>Foul!</button>
            <button onClick={() => restart()}>Hit!</button>
        </div>
    )
}

export default Dashboard;