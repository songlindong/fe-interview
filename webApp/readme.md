### 视觉基础 part-I
#### 1. 面试中常见的像素问题
=> 什么是像素？
* 1. 什么是px?
px - 虚拟像素，css像素的单位
px是一个相对单位，相对于设备像素而言的

=> 相对性
a. 相对于同一个设备 css像素是可变的
默认情况下css像素 === 物理像素 => 会受到缩放的影响
css像素 = 缩放倍数 * 单个物理像素宽度

b. 相对于不同的设备，一个css像素可变

=> 1. 相对性 2. 设计稿与实际屏幕不绝对

* 2. DP 
dp - 设备像素 / 物理像素，单位是pt(1pt = 1/72(inch))
=> dp是一个绝对单位，生产完成后固定不变

* 3. DIP
dip - 设备逻辑像素 === 虚拟像素

* 4. DPR
dpr - 设备像素比
初始状态下，物理像素与css像素的初始比例关系

dpr = 设备像素 / css像素
- 移动开发中1个css像素具体占用了多少设备像素

* 5. PPI
每英寸像素取值（像素密度）- 衡量单个物理单位内拥有的像素

* 6. REM / EM - 动态相对单位
em 是相对于父元素的字体大小，计算得出的单位
rem(root em) 相对于html元素的字体大小

```js
  html {
    font-size: 20px;
  }
  .father {
    font-size: 16px;
  }

  .child1 {
    width: 10em;
  }
  .child2 {
    width: 10rem;
  }
  // 面试题：问child1和child2宽度具体几px?
  // 对于em来说，相对于父元素，1em = 16px => width = 160px
  // 对于rem来说，rem是相对于html，1rem = 20px => width = 200px
```
#### 2. 媒体查询 - media
根据设备大小，设置差异化的样式，从而适配不同屏幕的大小

```js
  // 1. 区分范围
  @media(max-width: 768px) {
    body {
        // 小屏幕样式
    }
  }

  @media(min-width: 1200px) {
    body {
        // 大屏样式
    }
  }

  // 768px 992px 1200px....

  // 2. 完整写法
  @media mediatype key (media feature) {
     // style
  }

  // a. mediatype
  // all - 所有设备
  // print - 打印预览
  // screen - 屏幕
  // speech - 语音合成器

  // b. key
  // and: 多个媒体特性之和， 相当于且
  // not: 排除某个具体的媒体类型，相当于非
  // only: 当且仅当特定的查询

  // c. media feature
  // width、min-width、max-width
  
  // 3. 链接式
  <link rel="stylesheet" href="./a.css" media="(min-width: 992px)"></link>
  <link rel="stylesheet" href="./b.css" media="(min-width: 1200px)"></link>
```
=> 实现一定程度上的响应式 => 大量重复的css

#### 3. 实际使用
rem - 根据html的根字体大小动态变化的单位
media - 根据设备具体宽度动态设置css的工具

rem + media => 全响应式页面

* 面试：
假设设计稿是750px, 那么html中的font-size设置为多大合适呢？
=> rem如何设置合适的比例能够还原设计稿
```js
 // 设计稿是750px => 屏幕分成15等份 => 每一份50px
 // 320px的设备中，每一份大小 320 / 15 = 21.33px
 // 640px的设备里 每一等分大小 640 / 15 = 52.67px
 屏幕宽度 320px ~ 640px
 @media screen and (min-width: 320px) {
    html {
        font-size: 21.33px;
    }
 }
```

* 追问：设计稿中有一个80px高度的div, css里真实高度是多少？
div高度 => rem的值 => 结合屏幕宽度得到不同的px
屏幕宽度是320px ~ 640px: 21.33 * 1.6 = 35.xxxpx
屏幕宽度750px以上：50 * 1.6 = 80px

=> 自适应的单位，原则上可以做到不同屏幕尺寸与设计稿都可以还原 => 设计师不感知、开发做转换
=> 如何能沟通让设计师也能感受到自适应逻辑的存在？

#### 4. 原子设计 + 栅格系统

