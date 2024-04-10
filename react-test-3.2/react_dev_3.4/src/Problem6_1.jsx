import React from 'react'
import { useState } from 'react'


// different component at the same position resets the state 
const Problem6_1 = () => {
  const [isfancy, setisfancy] = useState(false)
  const [renden2 , userender2 ] = useState(false)
  // const [show2, setShow2] = useState(false)

  // const [number2, setNumber2] = useState(0)

  return (
    <>
      <h1>Counter which preserves state/memory</h1>
      <div className="counter-container">
        <p>same component in the same position and also the type is same so react will preserve state  </p>
        {
          isfancy ?
            <Counter usefancy={isfancy} />
            :
            <Counter />
        }
        <p>different  component in the different position and also the type is same so react wont preserve state  </p>
        <Counter/>
        {
          renden2 ? 
          <Counter/> : ""
        }
      </div>
      <label >
        <input type="checkbox" value={isfancy} onClick={() => { setisfancy(!isfancy) }} />
        use fancy styling
      </label> <br />
      <label >
        <input type="checkbox" value={renden2} onClick={() => { userender2(!renden2) }} />
        render sencond counter 
      </label>

      <style>{`
        .counter-container {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .counter {
          height: 300px;
          width: 200px;
          background-color: #aaa;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .counter h2 {
          color: aliceblue;
          font-size : 40px;
        }

        .hover {
          background-color: #2B323C;
        }
        .usefancy{
          color: yellow;
          border: 5px solid red;
        }
      `}</style>
    </>
  )
}

function Counter({ usefancy }) {
  const [number1, setNumber1] = useState(0)
  const [hover, setHover] = useState(false)


  function incrementor() {
    setNumber1(number1 + 1)
  }

  let className = "counter"
  if (hover) {
    className += " hover"
  }
  if (usefancy) {
    className += " usefancy"
  }

  return (
    <>
      <div
        className={className}
        onMouseEnter={() => { setHover(!hover) }}
        onMouseLeave={() => { setHover(!hover) }}
      >
        <h2>{number1}</h2>
        <br />
        <button onClick={incrementor}>Add One</button>
      </div>
    </>
  )
}



export default Problem6_1