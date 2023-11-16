import React, { useReducer } from 'react'

const initalState = { count: 0 }

function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return { count: state.count + 1};
        case 'decrement': 
            return { count: state.count - 1};
        case 'xxx':
            return { count: state.count + 100};
        default: 
           throw new Error();
    }
}

export default function Reducer() {    
   
    const [ state, dispatch ] =  useReducer(reducer, initalState)
  return (
    <div>
        count: {state.count}
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'xxx'})}>-</button>
    </div>
  )
}
