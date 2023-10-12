### JS事件
#### 事件类型
1. 鼠标类型
click 单击鼠标
dbclick 双击鼠标

mousedown 鼠标被按下未弹起 -- 拖拽开始的处理
mouseup 释放鼠标按钮 -- 拖拽结束的处理
mousemove 移动鼠标 -- 拖拽的位移计算
mouseover 鼠标移动到某个元素上方时

mouseenter 鼠标首次从元素外部移入元素范围内触发
mouseleave 鼠标移出

2. 键盘类型事件
keydown 键盘按下任意键时触发 => 按住不放，会重复触发 - 按钮的动作回调
keyup 当用户释放键盘上的按键
keypress 键盘按下任意字符时触发 => 按住不放，会重复触发 - 字符输入的回调

3. HTML类型
a. 内容型
select 选择文本框（input textarea）中一个或多个字符触发
change 选择文本框内容改变且失去焦点
input 输入内容后回调
focus 聚焦后触发
blur 失去焦点后触发

b. 版面内容型
submit form元素上提交按钮
reset form元素上重置按钮

c. 窗口型
load 当前窗口完全加载后 => 触发是在window上
unload 当前页面完全卸载后 => 触发是在window上

resize 窗口大小变化时，触发回调
scroll 滚动触发


#### 事件的传播
1. 事件的传播模型：冒泡 & 捕获
冒泡的粒度是 -- 从细到粗
捕获的粒度是 -- 从粗到细

2. DOM的事件流 - 层级事件的传播上
事件捕获阶段 => 目标触发阶段 => 事件冒泡阶段

=> 问题：冒泡会导致大量底层事件被上层感知从而产生困扰

3. 冒泡阻断 - stopPropagation

#### 事件绑定 - DOM0级 与 DOM2级事件
1. DOM0级事件
直接进行行内绑定的事件

2. DOM2级事件
利用
addEventListener / removeEventListener

target.addEventListener(type, listener[, useCapture])

=> DOM0 和DOM2优先级问题


#### 事件委托
面试：有一个列表，点击每个节点的时候，实现节点的内容
```js
   <ul id="list">
      <li class="item">js</li>
      <li class="item">es</li>
      <li class="item">ts</li>
      <li class="item">react</li>
      <li class="item">vue</li>
   </ul>

   document.addEventListener('DOMContentLoaded', function() {
     let app = document.getElementById('list');
     let items = app.getElementsByClassName('item');

     for (let item of items) {
        item.addEventListener('click', function() {
            console.log('click item' + item.innerHTML);
        })
     }
   })

   // => 如果当前的节点列表非常大，每个节点挂载监听器，效率非常低
   document.addEventListener('DOMContentLoaded', function() {
     let app = document.getElementById('list');

     // 利用dom事件流，先捕获再冒泡
     app.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === 'LI') {
            let item = e.target;

            console.log('click item' + item.innerHTML)
        }
     })
   })
```
