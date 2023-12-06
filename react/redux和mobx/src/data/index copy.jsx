import React, { useEffect, useState } from 'react'
import { createData } from './data';

let init = {
    count: 1,
    
}

export const dataObj = createData(init);



export function Data1() {

    const [state, setState] = useState(init);

    useEffect(() => {
        dataObj.subscribe(() => {
            let currentData = dataObj.getData();
            console.log('this data is ', currentData);
            setState(() => currentData)

        })
    },[])

    const handleClick1 = () => {
        dataObj.modifyData({ count: 2 })
    };
    const handleClick2 = () => {
        dataObj.modifyData({ count: 0 })
    };

  return (
    <div>
    {state.count}
        <button onClick={handleClick1}>click1</button>
        {/* <button onClick={handleClick2}>click2</button> */}
    </div>
  )
}

export function Data2() {

    const [state, setState] = useState(init);

    useEffect(() => {
        dataObj.subscribe(() => {
            let currentData = dataObj.getData();
            console.log('this data is ', currentData);
            setState(() => currentData)

        })
    },[])

    const handleClick1 = () => {
        dataObj.modifyData({ count: 2 })
    };
    const handleClick2 = () => {
        dataObj.modifyData({ count: 0 })
    };

  return (
    <div>
    {state.count}
        {/* <button onClick={handleClick1}>click1</button> */}
        <button onClick={handleClick2}>click2</button>
    </div>
  )
}

