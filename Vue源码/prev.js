
let deps = null;
let reactions = [];


const handler = () => {
    return {
        get(target, key, descriptor) {
            if(deps) {
               // 恰好，fn 执行，并且get函数触发
               // 也就是说，fn中，引用了track的数据，也就是说，我要把这个收集起来
               reactions.push(deps);
            }
            return Reflect.get(target, key, descriptor)
        },
        set(target, key, value, descriptor) {
            const res = Reflect.set(target, key, value, descriptor);
            reactions.forEach((item) => item());
            return res;
        }
    }
}


function walk(data, handler) {
    if(typeof data !== 'object') return data;
    for(let key in data) {
        data[key] = walk(data[key], handler);
    }

    return new Proxy(data, handler());
}


function track(data) {
    return walk(data, handler)
}

function effect(fn) {
    // 我要知道，fn 中引用了这个count 没
    // 就要知道，在fn执行的时候，get 函数触发了没
    deps = fn;
    fn();
    deps = null;
}

/******* test ******/
const initData = { count: 0};

const data = track(initData);

// 被追踪
const render = () => {
    console.log(data.count);
}

effect(render);

data.count = 1;
data.count = 2;


