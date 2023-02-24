import React, { useState } from 'react'

const Counter = () => {
    const [num, setNum] = useState(0);

    return (
        <div>
            <button onClick={()=>setNum(num+1)} >Increment</button>
            <h2>{num}</h2>
        </div>
    )
}

export default Counter;
