// 模拟 SyncBailHook 的实现

class SyncBailHook {
    constructor(args) {
        this.tasks = []
    }
    tap(name, task) {
        this.tasks.push(task)
    }
    call(...args) {
        let index = 0;
        let ret = null;

        do {
            ret = this.tasks[index++](...args)
        } while (ret === undefined && index < this.tasks.length)
    }
}

const hook = new SyncBailHook(['name'])

hook.tap('吃饭', (name) => {
    console.log(name, '执行了吃饭事件1')
})
hook.tap('睡觉', (name) => {
    console.log(name, '执行了睡觉事件2')
})

hook.call('syy')