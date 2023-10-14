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
  rewriteRouter()

  // 初始执行匹配
  handleRouter()
}
