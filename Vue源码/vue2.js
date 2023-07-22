export function Vue(options = {}) {
    this.__init(options);
}

// initMixin
Vue.prototype.__init = function(options) {
    this.$options = options;
    this.$el = options.el;
    this.$data = options.data;
    this.$methods = options.methods;
    // beforeCreate -- initState -- initData
    proxy(this, this.$data);
    observer(this.$data);
    new Compiler(this)
}

// this.$data.message -- this.message 
// data : { num, age, sex }
function proxy(target, data) {
    Object.keys(data).forEach(key => {
        Object.defineProperty(target, key, {
            enumerable: true,
            configurable: true,
            get() {
                return data[key]
            },
            set(newVal) {
                // NaN
                if(newVal !== data[key]) {
                    data[key] = newVal
                }
            }
        })
    })
}

function observer(data) { new Observer(data) }

class Observer {
    constructor(data) {
        this.walk(data)
    }
    // data.a.b.c.d
    walk(data) {
        if(data && typeof data === "object") {
            Object.keys(data).forEach(key => this.defineReactive(data, key, data[key]))
        }
    }
    // 我们要把每一个 data 里面的数据，都收集起来
    defineReactive(obj, key, value) {
        let that = this;
        // 接着往下走
        this.walk(value);
        // 每一个数据，都给你一个依赖的数组。
        let dep = new Dep();
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                // 有很多事情要干， 收集
                if(Dep.target) {
                    dep.add(Dep.target)
                }
                return value;
            },
            set(newVal) {
                // NaN
                if(newVal !== value) {
                    value = newVal;
                    that.walk(newVal);
                    // 也有事情要干， 执行
                    dep.notify()
                }
            }
        })
    }
}
// let deps = null;

// 视图怎么更新，数据的改变，视图才会更新，需要去观察
// 我们假设，watcher 我去初始化，有个 cb 函数，这个函数，就是更新界面的！！！
class Watcher {
    constructor(vm, key, cb) {
        this.vm = vm; // vue的实例
        this.key = key;
        this.cb = cb;
        Dep.target = this;
        // 一旦执行了这句话，是不是就出发了这个值的get函数
        this.__old = vm[key];
        Dep.target = null;
    }

    update() {
        let newVal = this.vm[this.key];
        if(this.__old !== newVal) this.cb(newVal)
    }
}


// 每一个数据，都有一个依赖 
// [ watcher: {update}, watcher: {update}, watcher: {update} ]
// update 就是，你 new Watcher(..., cb)
// cb 就是你要改变界面的函数
class Dep {
    constructor() {
        this.watchers = new Set();
    }

    add(watcher) {
        if(watcher && watcher.update) this.watchers.add(watcher);
    }

    notify() {
        this.watchers.forEach(watc => watc.update())
    }
}

`   <h1>{{message}}</h1> //// -> new Watcher() -> 👿 -> cb
    <h2>{{num}}</h2> //// -> new Watcher() -> 👿 -> cb
    <input type="text" v-model="message" >
    <input type="text" v-model="num" >
    <button v-on:click="increase">【+】</button>`


// 
class Compiler {
    constructor(vm) {
        this.el = vm.$el;
        this.vm = vm;
        this.methods = vm.$methods;

        this.compile(vm.$el)
    }

    compile(el) {
        let childNodes = el.childNodes;
        // 类数组
        Array.from(childNodes).forEach(node => {
            // 如果是文本节点
            if(node.nodeType === 3) {
                this.compileText(node)
            } else if(node.nodeType === 1) {
                this.compileElement(node)
            }

            if(node.childNodes && node.childNodes.length) this.compile(node);
        })
    }

    compileText(node) {
        // 我们只考虑 {{ message }}
        let reg = /\{\{(.+?)\}\}/;
        let value = node.textContent;
        if(reg.test(value)) {
            let key = RegExp.$1.trim();
            // 开始时，先赋值 key -> message 
            node.textContent = value.replace(reg, this.vm[key]);
            // 添加观察者
            new Watcher(this.vm, key, val => {
                // render 函数
                node.textContent = val;
            })
        }
    }

    compileElement(node) {
        //  只匹配一下 v-on v-model
        if(node.attributes.length) {
            Array.from(node.attributes).forEach(attr => {
                let attrName = attr.name;
                if(attrName.startsWith('v-')) {
                    // v- 匹配成功，可能是 v-on:, v-model
                    attrName = attrName.indexOf(':') > -1 ? attrName.substr(5): attrName.substr(2);
                    let key = attr.value;
                    // 
                    this.update(node, key, attrName, this.vm[key])
                }
            })
        }
    }

    update(node, key, attrName, value) {
        if(attrName === "model") {
            node.value = value;
            new Watcher(this.vm, key, val => node.value = val);
            node.addEventListener('input', () => {
                this.vm[key] = node.value
            })
        }else if(attrName === 'click') {
            node.addEventListener(attrName, this.methods[key].bind(this.vm))
        }
    }
}