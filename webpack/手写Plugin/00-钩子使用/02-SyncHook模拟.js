// 模拟 SyncHook 的实现

class SyncHook {
    constructor(args) {
        this.tasks = []
    }
    tap(name, task) {
        this.tasks.push(task)
    }
    call(...args) {
        this.tasks.forEach((task) => task(...args))
    }
}

const hook = new SyncHook(['name'])

hook.tap('吃饭', (name) => {
    console.log(name, '执行了吃饭事件1')
})
hook.tap('睡觉', (name) => {
    console.log(name, '执行了睡觉事件2')
})

hook.call('syy')