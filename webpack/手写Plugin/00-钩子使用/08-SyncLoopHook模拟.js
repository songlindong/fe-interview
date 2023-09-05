// 模拟 SyncWaterfallHook 的实现

class SyncLoopHook {
    constructor(args) {
        this.tasks = []
    }
    tap(name, task) {
        this.tasks.push(task)
    }
    call(...args) {
     this.tasks.forEach(task => {
        let ret = null
        do {
          ret = task(...args)
        } while (ret !== undefined)
     })
    }
}

const hook = new SyncLoopHook(['name'])

hook.tap('吃饭', (name) => {
    console.log(name, '执行了吃饭事件1')
})
hook.tap('睡觉', (name) => {
    console.log(name, '执行了睡觉事件2')
})

hook.call('syy')