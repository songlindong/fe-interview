// 模拟 SyncHook 的实现

class AsyncParallel {
    constructor(args) {
        this.tasks = []
    }
    tapAsync(name, task) {
        this.tasks.push(task)
    }
    callAsync(...args) {
      let finalCallback = args.pop()
      let index = 0
      const done = () => {
        index++
        if(index === this.tasks.length) {
            finalCallback()
        }
      }
      this.tasks.forEach(task => {
        task(...args, done)
      })
    }
}

const hook = new AsyncParallel(['name'])

hook.tapAsync('吃饭', (name, cb) => {
    setTimeout(() => {
        console.log(name, '执行了吃饭事件')
        cb()
    }, 1000)
    
   })
hook.tapAsync('睡觉', (name, cb) => {
    setTimeout(() => {
        console.log(name, '执行了睡觉事件')
        cb()
    }, 1000)
   })

hook.callAsync('syy', () => {
    console.log('一天结束了')
})