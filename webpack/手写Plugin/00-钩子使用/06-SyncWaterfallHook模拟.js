// 模拟 SyncWaterfallHook 的实现

class SyncWaterfallHook {
    constructor(args) {
        this.tasks = []
    }
    tap(name, task) {
        this.tasks.push(task)
    }
    call(...args) {
      let [first, ...others] = this.tasks
      let ret = first(...args)
      others.reduce((preRet, task) => {
        return task(preRet)
      }, ret)
    }
}

const hook = new SyncWaterfallHook(['name'])

hook.tap('吃饭', (name) => {
    console.log(name, '执行了吃饭事件1')
})
hook.tap('睡觉', (name) => {
    console.log(name, '执行了睡觉事件2')
})

hook.call('syy')