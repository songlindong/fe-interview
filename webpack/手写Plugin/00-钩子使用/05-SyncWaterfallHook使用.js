const { SyncWaterfallHook } = require('tapable')

/**
 * 
 * todo: 
 */

class TodoList {
    constructor() {
        this.hooks = {
            morning: new SyncWaterfallHook(['name'])
        }
    }
    tap() {
        //* 在这个方法里，我们就可以基于SyncHook 的语法来tap不同的事件监听
       this.hooks.morning.tap('吃饭', (name) => {
        console.log(name, '执行了吃饭事件')
        return '123是老朋友'
       })
       this.hooks.morning.tap('睡觉', (name) => {
        console.log(name, '执行了睡觉事件')
       })
    }
    call() {
        // * 在这个方法里，我们就去触发不同的事件监听回调
        this.hooks.morning.call('syy')
    }
}

const t = new TodoList()
t.tap()
t.call()