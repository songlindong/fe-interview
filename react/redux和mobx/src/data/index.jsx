import React, { useEffect, useState } from 'react'
// import { dataObj, init } from './data';
import store from '../store/index';





export default function Data() {


    useEffect(() => {
        store.subscribe(() => {
            let currentData = store.getState();
            console.log('this data is ', currentData);

        })
    },[])

    const handleClick1 = () => {
        store.dispatch({ type: "ADD_COUNT" })
    };
    const handleClick2 = () => {
        store.dispatch({ type: "ADD_AGE" })
    };

  return (
    <div>
    {store.count}
        <button onClick={handleClick1}>click1</button>
        <button onClick={handleClick2}>click2</button>
    </div>
  )
}