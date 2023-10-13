import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/dynamicComponent'

// 1. router以plugin形式加入到vue项目中
Vue.use(Router)

// 2. 本质为类实体，需要实例化后方可使用 - 单例模式
// => 路由操作的本质：是 栈操作
// => 路由的注入和延续（hybrid）
const router = new Router({
    routes: [{
        path: '/',    // 路径
        name: 'HelloWorld', // 名称
        component: HelloWorld   // 模块指向
        // mode: 'hash' / 'history'
    }, {
        // 如何调整为按需一步加载？
        path: '/Dynamic',    // 路径
        name: 'Dynamic', // 名称
        // component: Dynamic   // 模块指向
        // 1. require进行加载
        // component: resolve => (require([
        //     '@/components/dynamicComponent.vue'
        // ], resolve))
        // 2. require.ensure懒加载 - webpack trunk
        component: r => require.ensure([], () => r(
            require('@/components/dynamicComponent.vue')
        ), 'dynamic')
        // 3. ES6懒加载
        // component: () => import('@/components/dynamicComponent.vue', 'dynamic')
        // => 结合分trunk进行单页加载速度的优化
    }],
    scrollBehavior() {
        // 1. 滚动回去
        // return {
        //     x: 0,
        //     y: 0
        // }
        // 2. 异步滚动
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    x: 0, y: 0
                }, 1000)
            })
        })
    }
})

export default router;