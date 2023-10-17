import { handleRouter } from "./handle-router"
import { rewriteRouter } from "./rewrite-router"

// { name, activeRule, entry, container, bootstrap, mount, unmount... }
let _apps = []

export const getApps = () => _apps

export const registerMicroApps = (apps) => {
  _apps = apps
}

export const start = () => {
  // 微前端的运行原理：

  // 1. 监视路由变化
  //    hash 路由：window.onhashchange
  //    history 路由
  //      history.go、history.back、history.forward 使用 popstate 事件：window.onpopstate
  //      pushState、replaceState 需要通过函数重写的方式进行劫持
  
  // 前进后退 （事件监听的方式）
  // window.addEventListener('popstate', () => {
  //   console.log('popstate')
  // })

  // 添加历史记录（函数重写）
  // const rawPushState = window.history.pushState
  // window.history.pushState = (...args) => {
  //    rawPushState.apply(window.history, args)
  //    console.log('监视到 pushState 变化了')
  // }

  // 替换历史记录（函数重写）
  // const rawReplaceState = window.history.replaceState
  // window.history.replaceState = (...args) => {
  //   rawReplaceState.apply(window.history, args)
  //    console.log('监视到 pushState 变化了')
  // }
  rewriteRouter()

  // 初始执行匹配
  handleRouter()
}
