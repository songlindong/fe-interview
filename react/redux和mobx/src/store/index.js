import { createStore, combineReducer } from "./redux";

let initState = {
    counter: { count: 0 },
    info: { age: 18 }
};

function counterReducer(state, action) {
    switch(action.type) {
        case "ADD_COUNT":
            return { count: state.count + 1 };
        case "MINUS_COUNT":
            return { count: state.count - 1 };
        case "ADD_AGE":
            return { count: state.count + 100};
        default:
            return state;
    }
}

function infoReducer(state, action) {
    switch(action.type) {
        case "ADD_AGE":
            return { age: state.age + 1 };
        case "MINUS_AGE":
            return { age: state.age - 1 };
        default:
            return state;
    }
}


const reducers = combineReducer({
    counter: counterReducer,
    info: infoReducer,
})

const store = createStore(reducers, initState);

export default store;