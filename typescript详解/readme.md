# TS

1. type checking 类型检测
2. auto completion 类型推导

```js
npm i typescript -g // 安装
tsc -v // 检查是否安装成功
tsc --init // 初始化
```

# Typescript 详解
## 一、TS基础概念
### 1. 什么是TS
a. 对比原理
* 他是JavaScript的一个超集，在原有基础上，添加了可选静态类型和基于类的面向对象编程方式

TS的使用场景
> 面向项目：
TS - 面向解决大型复杂项目，繁杂架构以及代码维护的场景
JS - 脚本化语言，用于面向简单的页面场景

> 自主检测:
TS - 编译期间，主动发现并指出错误
JS - 无编译阶段

> 类型检测：
TS - 强类型 
JS - 弱类型

> 运行流程：
TS - 依赖编译，依靠编译打包后，翻译成JS
JS - 可直接运行于浏览器中

> 复杂特性：
TS - 模块化、泛型、接口、

b. 安装运行
```js
 npm install -g typescript
 tsc -v

 tsc test.ts
 // 面试点：ts相较于js优势，功能 => 上面的四个点
 // ts是如何实现这些功能的 => 多了编译时 => ts官方编译器 / babel
```

### 2. TS基础类型与写法

* boolean、string、number、array、Null、undefined
```js
// es
let isEnabled = true;
let class = 'ceshi';
let classNum = 2;
let u = undefined;
let n = null;
let classArr = ['basic', 'execute'];

// ts
let isEnabled: boolean = true;
let class: string = 'ceshi';
let classNum: number = 2;
let u: undefined = undefined;
let n: null = null;

// 单纯型数组
let classArr: string[] = ['basic', 'execute'];
let classArr: Array<string> = ['basic', 'execute'];
```

* tuple - 元组

```js
 let tupleType: [string, boolean];
 tupleType = ['semlinker', true]; // type 复合
```

* enum - 枚举

```js
   // 数字类枚举 - 面试点：默认从0开始，依次递增
   enum Score {
    BAD,
    NG,
    GOOD,
    PERFECT,
   }

   let sco: Score = Score.BAD;

   // 字符串类型枚举 - 有值取值
   enum Score {
    BAD = 'BAD',
    NG = 'NG',
    GOOD = 'GOOD',
    PERFECT = 'PERFECT',
   }

   // 反向映射 - 正反向双重mapping
   enum Score {
    BAD,
    NG,
    GOOD,
    PERFECT,
   }

   // 异构类型
   enum ENUM {
    A,
    B,
    C = 'C',
    D = 'D',
    E = 6,
    F,
   } 
   
   // 面试题：指出以上异构类型中每种枚举值的具体值 => 追问：js本质实现（手写异构枚举）

   let Enum;
   (function(Enum) {
     // 正向
     Enum["A"] = 0;
     Enum["B"] = 1;
     Enum["C"] = 'C';
     Enum["D"] = 'D';
     Enum["E"] = 6;
     Enum["F"] = 7;

     // 逆向
     Enum[0] = 'A';
     Enum[1] = 'B';
     Enum[6] = 'E';
     Enum[7] = 'F';
   })(Enum || (Enum = {}))
```

* any、unknown、void - 拎出来区别

```js
  // any - 绕过所有类型检查 => 类型检测和编译筛查功能全部取消
  let anyValue: any = 123;
  
  anyValue = 'anyValue';
  anyValue = false;

  let value1: boolean = anyValue;

  // unknown - 绕过了赋值检查 => 禁止更改传递
  let unknownValue: unknown;
  
  unknownValue = true;
  unknownValue = 123;
  unknownValue = 'unknownValue';

  // 面试喜欢问的点
  let value1: unknown = unknownValue; // OK
  let value2: any = unknownValue; // OK
  let value3: boolean = unknownValue; // NOK

  // void(与any反过来)

  function voidFunction(): void {
    // no return
  }
  
  // never - 永不回头 or 永远error

  function error(msg: string): never {
    throw new Error(msg);
  }

  function longlongLoop(): never {
    while(true) {}
  }
```

* Object / ObjectConstrutor / {} - 对象

```js
 // Object - Object.prototype 上属性
 interface Object {
  constructor: Function;
  toString(): string;
  valueOf(): Object;
 }// %接口interface

 //ObjectConstructor - 定义了Object本身的属性
 interface ObjectConstructor {
  readonly prototype: Object;
  getPrototypeOf(o: object): Object;
 }

 // 例子
 interface ObjectConstructor {
  create(o: object | null): any;
 }

 Object.create(proto);
 Object.create(null);
 Object.create(undefined); // NOK

 // {} - 定义空属性
 const obj = {};
 obj.prop = 'ceshi'; // NOK
 obj.toString(); // OK
```

### 2. 接口 - interface

* 对行为的抽象，具体行为由类实现
```js
// 对行为的抽象
interface Class {
  name: string;
  time: number;
}

// 具体行为的对象
 let zhaowa: Class = {
  name: 'typeScript',
  time: 2
 }

// 只读 & 任意
interface Class {
  readonly name: string;
  time: number;
}

// 面试题 - 和es的对比 <=> const
let arr: number[] = [1,3,4,5,6];
let ro: ReadonlyArray<number> = arr;

ro[0] = 12; // 下标赋值操作 -NOK
ro.push(5); // 增加操作 - NOK
ro.length = 100; // 长度改写 - NOK
arr = ro; // 覆盖 - NOK

// 任意可添加属性 - 可外部拓展对象
interface Class {
  readonly name: string;
  time: number;
  [propName: string]: any;
}

const c1 = { name: 'JS'}
const c2 = { name: 'browser', time:1 }
const c3 = { name: 'TS', level:1 }
```

### 三、交叉类型 - type &

```js
 // 合并
 interface A { x: D;}
 interface B { x: E;}
 interface C { x: F;}

 interface D { d: boolean;}
 interface E { e: string;}
 interface D { f: number;}
```



