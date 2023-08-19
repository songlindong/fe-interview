# CSS 的@ 规则
## CSS = 级联（Cascading）+ 样式（Style）
* 级联机制
 * 选择器
 * 优先级

* 样式：
  * 元素位置的"排版"
  * 元素视觉效果的"渲染"
  * 决定元素的"行为" 的属性

##  CSS规则
* 普通规则
* 特殊规则：at-rule例：@charset
* @charset
 <style>
    @charset: "utf-8";
 </style>
* @import
 <style>
    @import "mystyle.css";
    @import url("mystyle.css");
 </style>

 ## @规则：用于某些特定属性的值
 * @media和@support: 这两个规则是大名鼎鼎的media query
 * @page: 可以理解为一种特殊的盒模型，分页媒体访问页面的时候
 * @viewport: 定义视口的一些特性，早期浏览器把视口相关信息实现成了meta标签，因为兼容性问题，现在用这个CSS规则的不多
 * @namespace: 用于指定默认xml命名空间
 * @layer: 用于管理优先级
 ## @规则：用于某些特定属性的值
 * @couter-style: 生成一种列表项样式，用于list-style属性
 * @font-face: 生成一种自定义字体，用于font-family属性
 * @key-frames: 用于animation属性
 ## @规则：几乎不可用的
 * @color-profile是SVG1.0引入的CSS特性（可以认为已经废弃）
 * @document 目前几乎没有实现
 * @font-feature-values目前几乎没有实现

## CSS的选择器机制
### 选择器：
 - 就是根据某些特征选取HTML元素，为其指定一些属性

### 简单选择器