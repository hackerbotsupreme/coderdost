// 3.2 
// problem 1 

import React, { useState, useEffect } from 'react';
const Problem1_clock = () => {
    const [time, setTime] = useState(new Date());
    const [color, setColor] = useState(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    return (
        <>
            <select onChange={(e) => { setColor(e.target.value) }} >
                <option value="red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
            </select> <br />
            <span> Time is :</span> <h1 style={{ color: color, display: 'inline-block' }}>{hours}:{minutes}:{seconds} {ampm}</h1>
        </>
    )
}

export default Problem1_clock

// using only useState we can do 
/* 
 const [timeObject, setimeObject] = useState(new Date())
  const [colour, setcolour] = useState("red")

  let currentHour = timeObject.getHours()
  let currentMinute = timeObject.getMinutes()
  let currentSecond = timeObject.getSeconds()
  let ampm = currentHour > 12 ? "PM" : "AM"

  setInterval(() => {
    setimeObject(new Date())
  }, 1000);
  return (<>
    <h2>hello</h2>
    <h2 style={{ color: colour }} >{currentHour}:{currentMinute < 10 ? "0" + currentMinute : "" + currentMinute}:{currentSecond < 10 ? "0" + currentSecond : "" + currentSecond}{"  "}{ampm}</h2>
    <select onChange={e => { setcolour(e.target.value) }} >
      <option value="red" >Red</option>
      <option value="blue" >Blue</option>
      <option value="green" >Green</option>
    </select> <br />
    {currentSecond<10 ? "0"+currentSecond : ""+currentSecond} 
    </> 
    
*/