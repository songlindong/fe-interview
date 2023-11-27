export const createData = function(init) {
    let data = init;
    let deps = [];

    function getData() {
        return data;
    }

    function modifyData(newData) {
        data = newData;
        // notifyAll
        deps.forEach(fn => fn())
    }
    
    function subscribe(handler) {
        deps.push(handler)
    }
    return  {
        getData,
        modifyData,
        subscribe
    }
}