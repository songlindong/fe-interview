const { SyncHook } = require('tapable')

/**
 * tapable 是一个基于发布订阅模式的钩子库
 * 所以你要理解，它有些类似于流程控制，因此它不仅仅只能应用于webpack，只要你愿意，你可以将它放在你业务场景里
 * 
 * todo: 
 */

class TodoList {
    constructor() {
        this.hooks = {
            morning: new SyncHook(['name'])
        }
    }
    tap() {
        //* 在这个方法里，我们就可以基于SyncHook 的语法来tap不同的事件监听
       this.hooks.morning.tap('吃饭', (name) => {
        console.log(name, '执行了吃饭事件')
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