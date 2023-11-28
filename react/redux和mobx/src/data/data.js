export const createData = function(init) {
    let data = init;
    let deps = [];

    function getData() {
        return data;
    }

    // function modifyData(newData) {
    //     data = newData;
    //     // notifyAll
    //     deps.forEach(fn => fn())
    // }

    function modifyDataByAction(action) {
        data = _setData(data, action)
        // notifyAll
        deps.forEach(fn => fn())
    }
    
    function subscribe(handler) {
        deps.push(handler)
    }
    return  {
        getData,
        modifyDataByAction,
        subscribe
    }
}

function _setData(data, action) {
    switch(action.type) {
        case "INCREMENT":
            return {...data, count: data.count + 1};
        case "DECREMENT":
            return {...data, count: data.count - 1};
        default:
            return data;
    }
}