import React, { useState } from 'react'

const Problem3 = () => {
    const [value1 , setValue1] = useState(0)
    const [value2 , setValue2] = useState(0)
    const [hide , setHide ] = useState(true)
    return (
        <>
        <Counterr  number={value1}  setNum={setValue1} />
        {hide ?<Counterr number={value2}  setNum={setValue2} /> : "" }
        <input type="checkbox" name="" id="checkboxx" onClick={()=>{setHide(!hide)}} />
        <label htmlFor="checkboxx">Render the second counter</label>
        </>
    )
}
const Counterr = ({number,setNum}) => {
    return (
        <>
            <div>
                {number}
                <button onClick={()=>{setNum(number+1)}}>Add One</button>
            </div>
        </>
    )
}


export default Problem3