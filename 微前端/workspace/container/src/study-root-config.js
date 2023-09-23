import { registerApplication, start } from "single-spa"
// import { constructApplications, constructRoutes } from "single-spa-layout"

// // 获取路由配置对象
// const routes = constructRoutes(document.querySelector("#single-spa-layout"))
// // 获取路由信息数组
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name)
//   }
// })
// // 遍历路由信息注册应用
// applications.forEach(registerApplication)

registerApplication(
  "@single-spa/welcome",
  () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  location => location.pathname === "/"
)

registerApplication({
  name: "@study/micro-test",
  app: () => System.import("@study/micro-test"),
  activeWhen: ["/micro-test"]
})

// registerApplication({
//   name: "@study/todos",
//   app: () => System.import("@study/todos"),
//   activeWhen: ["/todos"]
// })

// registerApplication({
//   name: "@study/realworld",
//   app: () => System.import("@study/realworld"),
//   activeWhen: ["/realworld"]
// })

start({
  urlRerouteOnly: true
})
