// 类似于 EventEmitter 库（发布订阅）

const { SyncHook } = require('tapable')

const s = new SyncHook()

s.tap('事件1', () => {
    console.log('事件1发生了')
})
s.tap('事件2', () => {
    console.log('事件2发生了')
})

s.call()