export const createStore = function(reducers, initState) {
    let state = initState;
    let listeners = [];

    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducers(state, action)
        // nitifyAll
        listeners.forEach(fn => fn())
    }

    dispatch({ type: Symbol() })

    function subscribe(handler) {
        listeners.push(handler);
    }

    return {
        dispatch,
        subscribe,
        getState
    }
}

// 以上是 redux 的核心源码

export const combineReducer = function(reducers) {
    const keys = Object.keys(reducers); // [counter, info]
    return function(state = {}, action) {  // { type: "ADD_COUNT" }
        const nextState = {};
        for(let i = 0; i < keys.length; i++) {
            const key = keys[i];   // counter   // info
            const reducer = reducers[key];  // counterReducer   // infoReducer
            const prev = state[key]; // counter: { count: 0 },  // { age: 18 }
            const next = reducer(prev, action) // counter: { count: 1 },   // { age: 18 }
            nextState[key] = next; 
        }
        return nextState;
    }
}

