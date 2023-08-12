## 一、项目需要使用typescript

### 1. 引入和使用

#### webpack打包配置
=> vue-cli - vue init / create ${myproject} ${template} / => 配置webpack
a. entry - 入口
b. extensions加上.ts文件area - 用于处理尝试的数据尾缀列表
c. loaders - ts-loader, 增加对于ts的处理 
=> 工程化的处理
=> webpack编译时

#### TS配置
tsconfig.json

### 2. vue / vuex + typescript
```ts
 <template>
   <div>
     <vueComponent></vueComponent>
   </div>
 </template>

 <script lang="ts">
   // 组件定义
   //  1. 定义组件的方式上：形式上 - extends
  const Component = {
    vueComponent // TS 无法断定内部为vue组件，需要我们做额外的申明处理, - Vue.prototype.XXX
  }

  import Vue from 'vue'
  // Vue.extend Vue.component
  const Component = Vue.extend({
     // 组件 + 类型判断
  })

  // 2. 官方vue-class-component - 全面拥抱面向对象
  import Component from 'vue-class-component'
  
  // @Component 本质 - 类装饰器 => 利用装饰器，统一类描述vue模板等
  @Component({
    template: '<vueComponent></vueComponent>'
  })
  export default class myComponent extends Vue {
    message: string = 'Hello ceshi'
    onClick(): void {
        // 点击事件
    }
  }

  // 3. 申明 - 利用ts的额外补充模块declare => 实现独立模块的声明，使之可以被独立引用
  declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
  }

  // 补充模块 - .d.ts模块申明描述
  declare module '/typings/vuePlugin.d.ts' {
    interface Vue {
        myProps: string
    }
  }
  // 实例中使用
  let vm = new Vue();
  console.log(vm.myProps);

  // 4. props - 提供propType原地声明复合变量
  import { propType } from 'vue'
  
  interface customPayload {
    str: string,
    number: number,
    name: string,
  }
  const Component = Vue.extend({
    props: {
        name: String,
        success: {type: String},
        payload: {
            type: Object as propType<customPayload>
        }
    }
  })


  // 5. computed 以及method中包含this且有return的方法 -需要声明返回类型
  computed: {
    getMsg(): string {
        return this.click() + '!'
    }
  } 

  methods: {
    click(): string {
        return this.click() + 'ceshi'
    }
  }
 </script>

 // 6. vuex接入ts - 声明使用
 // vuex.d.ts 声明模块 - ComponentCustomProperties
 import { ComponentCustomProperties } from 'vue'
 declare module '@vue/runtime-core' {
    interface State {
        count: number
    }

    interface ComponentCustomProperties {
        $store: Store<state>
    }
 }

 // 7. api形式编码 - 官方推荐
 // store.ts
 import { InjectionKey } from 'vue'
 import { createStore, Store } from 'vuex'

 export interface State {
    count: number
 }

 export const key: InjectionKey<Store<State>> = Symbol()

 export const store = createStore<State>({
    state: {
        count: 0
    }
 })

 // main.ts
 import { createApp } from 'vue'
 import { store, key } form './store'

 const app = createApp({})

 // 利用provider & inject
 app.use(store, key) // => 传入了injection key => vue.use 使用plugin

 app.mount('#app')

 // 消费方
 import { useStore } from 'vuex'
 import { key } from './store'

export default {
    const store = useStore(key)

    // store.state.count
}
// 标准接口接入的形式引入，核心利用了vue的provide喝inject

// 8. vuex完全面向对象方式 - 使用vuex-class
import { State, Action, Getter } from 'vuex-class';

export default class App extends Vue {
    // 属性装饰器，整合了store状态
    @State login: boolean;

    // 事件装饰器，整合了store方法
    @Action setInit:() =>void;

    get isLogin: boolean;

    mounted() {
        this.setInit();
    }

}

```
