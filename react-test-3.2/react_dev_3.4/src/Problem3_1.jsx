import React from 'react'
import { useState } from 'react'

const App = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)

    return (
        <>
            <h1>Counter which preserves state/memory</h1>
            <p> because its the same componenrt at the same position </p>
            <p>so react optimizes the rendering and uses one isntance of counter </p>
            <div className="counter-container">
                <Counter number={number1} setNumber={setNumber1} />
                {show && <Counter number={number2} setNumber={setNumber2} />}
            </div>
            <br />
            <label>
                <input type="checkbox" checked={show} onClick={() => { setShow(!show) }} />
                Render the next counter
            </label>
            <h1>Counter which does not preserve state/memory</h1>
            <p>well in that case this counter2 is also the same componenrt at the same position  </p>
            <p>then why the state is not preserved </p>
            <div className="counter-container">
                <Counter2 />
                {show2 && <Counter2 />}
            </div>
            <label>
                <input type="checkbox" checked={show2} onClick={() => { setShow2(!show2) }} />
                Render the next counter
            </label>
            <div className='explanation' >
                <h2>in thins code , after app is rendered , there is two instances one of counter and second one is counter2  both are at the second place/position of counter-container div , whn i toggle for the counter it sees that there is an state on which the number of counter is at/inside the app so it uses this/reuses this number <br /> <br /> to create a new counter instance but in the case of counter 2 when i toggle the state/number is controlled by the component itself for which after  the component(with state) unmounted after toggling and recreated with 0 as state thatss why it seems the counter is reserving the state but counter2 is not ? <br /> <br /> and also if yu ssay what about same component at the same position logic it seems they are at the same place so why does react not preserving the state of counter2 , well its not same thing at the same position as when the counter2 is removed there is an empty space / no position exists no more so its not same position at the same place , <br /> <br /> its differnt components(""/counter2) at the same position thts why this is not preserving its number</h2>
                <p>
                    well then this also can be said in case of counter that if it is also removed and remounted how react identified that this counter have this state and it reuses it to create that ?? that's simple , its because we used props in that counter's jsx ok
                    so that this counter gets created with this values
                </p>
            </div>
            <style>{`
        .counter-container {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .panel {
          padding: 10px;
          border: 2px white solid;
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
        }

        .hover {
          background-color: #2B323C;
        }
      `}</style>
        </>
    )
}

function Counter({ number, setNumber }) {
    const [hover, setHover] = useState(false)

    function incrementor() {
        setNumber(number + 1)
    }

    let className = "counter"
    if (hover) {
        className += " hover"
    }

    return (
        <>
            <div
                className={className}
                onMouseEnter={() => { setHover(!hover) }}
                onMouseLeave={() => { setHover(!hover) }}
            >
                {number} <br />
                <button onClick={incrementor}>Add One</button>
            </div>
        </>
    )
}

function Counter2() {
    const [hover, setHover] = useState(false)
    const [number, setNumber] = useState(0)

    function incrementor() {
        setNumber(number + 1)
    }

    let className = "counter"
    if (hover) {
        className += " hover"
    }

    return (
        <>
            <div
                className={className}
                onMouseEnter={() => { setHover(!hover) }}
                onMouseLeave={() => { setHover(!hover) }}
            >
                {number} <br />
                <button onClick={incrementor}>Add One</button>
            </div>
        </>
    )
}

// now are they controlled or uncontrolled components ?? 
// In the provided code, the state I'm referring to is the
//  `number` state that is managed by the `Counter`
//  and `Counter2` components themselves.

// In the `Counter` component:

// ```jsx
// function Counter({ number, setNumber }) {
//   const [hover, setHover] = useState(false)

//   function incrementor() {
//     setNumber(number + 1)
//   }

//   // ...
// }
// ```

// The `number` state is passed down from 
// the parent component (`App`) as a prop, along 
// with the `setNumber` function to update that state.

// In the `Counter2` component:

// ```jsx
// function Counter2() {
//   const [hover, setHover] = useState(false)
//   const [number, setNumber] = useState(0)

//   function incrementor() {
//     setNumber(number + 1)
//   }

//   // ...
// }
// ```

// The `number` state is managed internally within 
// the `Counter2` component itself, using the `useState` hook.

// However, in both cases, the `number` state is still 
// considered "controlled" because it is either:

// 1. Passed down as a prop from the parent component (`App`) 
// and updated using the provided state updater function (`setNumber`).
// 2. Managed internally within the component itself, but 
// the component is still a "controlled" component because 
// its state is encapsulated and managed by React rather 
// than relying on the DOM input value.

// The key point is that in both `Counter` and `Counter2` 
// components, the `number` state is managed by React, either 
// through props or internal state management, rather than being 
// directly tied to the DOM input value. This is what qualifies 
// them as "controlled" components, even though the state
//  management approach differs between the two components.

export default App