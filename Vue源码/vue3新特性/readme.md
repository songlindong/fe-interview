# Vue3 新特性&源码解析

## 1. 目标
对比Vue2，学习Vue3的基本使用，和关键的技术点，并且能够使用Vue3完成组件开发

## 2. 大纲
1. Vue2、3响应式对比
2. Vue3新特性

## 3. Vue2、3响应式对比
vue2: Object.defineProperty
vue3: Proxy

```js
const initData = {value: 1};

const data = {}

Object.keys(initData).forEach(key => {
    Object.defineProperty(data, key, {
        get() {
            console.log('访问了，', key);
        },
        set(v) {
            console.log('修改了，', key);
            initData[key] = v;
        }
    })
})

data.value
data.value = 2
data
initData.value2 = 2
data.value2
```
Vue.set(target, key, value)
- target进行数据校验
 1. undefined、null、基本的数据类型，报错
 2. 数组：max(target.length, key)作为新的数组长度，使用splice(key, 1, value)
 3. 对象：key是否在对象里，如果在，直接替换；如果不在，直接判断target是不是响应式对象；判断是不是Vue实例或者根的数据对象，throw error，不是直接给target的key赋值，如果target是响应式的，使用defineReactive将新的属性添加到target，进行依赖收集；

```js
// example
this.$set(data, a, 1);

// 源码
function set(target: Array<any> | Object, key: any, val: any): any {
    // isUndef 是判断target是不是等于undefined 或者 null
    // isPrimitive 是判断target的数据类型是不是string、number、symbol、boolean中的一种
    if (process.env.NODE_ENV !== 'production' && (isUndef(target) || isPrimitive(target))) {
        warn(`Cannot set reactive property on undefined, null, or primitive value：${()}`)
    }

    // 数组的处理
    if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key)
        target.splice(key, 1, val)
        return val
    }

    // 对象，并且该属性原来已存在于对象中，则直接更新
    if (key in target && !(key in Object.prototype)) {
        target[key] = val
        return val
    }

    // vue给响应式对象(比如data里定义的对象)都加了一个__ob__属性，
    // 如果一个对象有这个__ob__属性，那么就说明这个对象是响应式对象，修改对象已有属性的时候就会触发页面渲染
    // 非 data 里定义的就不是响应式对象
    const ob = (target: any).__ob__

    if (target._isVue || (ob && ob.vmCount)) {
        process.env.NODE_ENV !== 'production' && warn(
            `Avoid adding reactive properties to a Vue instance or its root $data
            at runtime - declare ir upfront in the data option
            `
        )

        return val
    }

    // 不是响应式对象
    if (!ob) {
        target[key] = val
        return val
    }

    // 是响应式对象，进行依赖收集
    defineReactive(ob.value, key, val)

    // 触发更新视图
    ob.dep.notify()
    return val
}
```

Proxy

get、set前，拦截

```js
const proxy = new Proxy({}, {
    get: function(target, propKey) {
        return 35;
    }
})

const obj = Object.create(proxy);
console.log(obj.time);

const person = {
    name: 'xianzao'
}

const proxy = new Proxy(person, {
    get: function(target, propKey) {
        if (proKey in target) {
            return target[propKey];
        } else {
            throw error;
        }
    }
})

```
```js
// proxy set

const validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                console.error('age is not number');
            }
            if (value > 100) {
                console.error('age is not right');
            }
        }
    }
}

const person = new Proxy({}, validator);

person.age = 100;

person.age = 'xianzao';
person.age = 1000;
```

```js
const initData = { value: 1 }

const proxy = new Proxy(initData, {
    get: function(target, key, receiver) {
        console.log('访问了，', key);
        return Reflect.get(target, key, receiver);
    },
    set: function(target, key, value, receiver) {
        console.log('修改了'， key);
        return Reflect.set(target, key, value, receiver);
    }
})

proxy.value

proxy.value = 2

proxy.value2 = 2

initData.value3 = 3

proxy.value3
```

## Vue3的新特性
