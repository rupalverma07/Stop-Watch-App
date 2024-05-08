import React from 'react'
import { useState,useEffect } from 'react'

const Stopwatch = () => {
const[timer,setTimer] = useState(0)
const[isRunning,setIsRunning] = useState(false)


const startHandler =()=>{
    setIsRunning(true)
}
const stopHandler=()=>{
    setIsRunning(false)
    
}

const resetHandler =()=>{
    setIsRunning(false)
    setTimer(0)
}

useEffect(()=>{
    let intervalId;
    if(isRunning){
        intervalId =setInterval(()=>{
        setTimer(prevValue => prevValue + 1)
    },1000)}

   return ()=>clearInterval(intervalId)
},[isRunning])
const formateTime = (seconds) =>{
    // 1min = 60 sec => sec = min/60
    let minute = Math.floor(seconds/60);
    let remainingSec = seconds%60;

    return `${minute}:${remainingSec<10 ? "0":""}${remainingSec}`
}
  return (

    <div >
      <h1>Stopwatch</h1>
      <div style={{fontSize:"20px"}}>Time: {formateTime(timer)}</div>
      
    {isRunning ? (<button onClick={stopHandler}>Stop</button>) : (<button onClick={startHandler}>Start</button>)}
      
      
      <button onClick={resetHandler}>Reset</button>
    </div>
  )
}

export default Stopwatch
