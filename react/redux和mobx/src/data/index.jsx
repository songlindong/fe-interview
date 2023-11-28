import React, {useEffect, useState } from 'react'
import { createData } from './data'


let init = {
    count: 1
}

export const dataObj = createData(init)

export default function Data() {

  const [state, setState] = useState(init)

  useEffect(() => {
    dataObj.subscribe(() => {
        let currentData = dataObj.getData();
        console.log('this data is', currentData);
        setState(() => currentData)
    })
  }, [])

   const handleClick1 = () => {
    dataObj.modifyDataByAction({ type: 'INCREMENT'})
   }
   const handleClick2 = () => {
    dataObj.modifyDataByAction({ type: 'DECREMENT' })
   }

  return (
    <div>
        {state.count}
        <button onClick={handleClick1}>click1</button>
        <button onClick={handleClick2}>click1</button>
    </div>
  )
}