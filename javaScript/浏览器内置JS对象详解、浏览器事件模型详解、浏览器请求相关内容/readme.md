# 浏览器事件模型 & 请求

## 事件模型

### DOM事件

DOM0 DOM1 DOM2

document object model html API

VDOM virtual dom ?? dom

element <p class style></p>

- element
- attribute
- children

diff

dom 

1997 dynamic html

IE netscape -> w3c

1998 DOM level1 

DOM0
```js
btn.onClick = function(e) {
  console.log(e) // 事件对象
}

btn.onClick = function() {
    console.log(window.event) // 事件对象
}

press -> btn.onClick.call(btn, event)
```
```js
function fn1(){}
function fn2(){}

btn.onClick = function(e) {
    fn1.call(this.XXX)
    fn2.call(this.XXX)
}
```

### DOM1
IE netscape

### DOM2

addEventListener

removeEventListener

btn.addEventListener('eventName', cb, bool) false

```js
btn.addEventListener('click', function() {
    fn()
})
btn.addEventListener('click', function() {
    fn()
})

btn.removeEventListener('click', fn1)
btn.removeEventListener('click', function() {
    fn2()
})
```
只能移除具名函数，对于匿名函数是移除不了的

IE8

attachEvent 只支持在冒泡中执行

```js
btn.attachEvent('click', fn1);
btn.attachEvent('click', fn2);
```

```js
 if (typeof btn.addEventListener === 'function') {
    btn.addEventListener('click', fn);
 } else if (typeof btn.attachEvent === 'function') {
    btn.attachEvent('click', fn) 
 } else {
    btn.onClick = fn;
 }
```

```js
<p onClick={() => fn1()}> on + 大写开头 Click 合成事件
```

### 事件冒泡 捕获 DOM2

事件执行流程

- document
- html
- body
- div

事件捕获
执行事件
事件冒泡

- stopPropagation preventDefault
- stopImmediatePropagation

```js
// list 的捕获
$list.addEventListener('click', (e) => {
    console.log('list capturing');
    e.stopPropagation();
}, true)

// list 的捕获 2 
$list.addEventListener('click', (e) => {
    console.log('list capturing');
    e.stopPropagation();
}, true)
```

```js
 var EventUtils = {
    addHandler: function (elemet, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false)
      } else if (element.attachEvent) {
        element.attachEvent(`on${type}`, handler);
      } else {
        element[`on${type}`] = handler;
      }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false)
        } else if (element.detachEvent) {
            element.detachEvent(`on${type}`, handler);
        } else {
            element[`on${type}`] = null;
        }
    },
    // 获取事件event的对象
    getEvent: function(event) {
        return event ?? window.event;
    },
    // 获取目标元素
    getTarget: function(event) {
        return event.target ?? event.srcElement;
    },
    // 阻止默认事件行为
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    // 停止事件传播
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
 }
```
### 事件委托

```js
<ul id="myLinks">
   <li id="goSomowhere">Go somewhere</li>
   <li id="doSomething">Do something</li>
   <li id="sayHI">Say hi</li>
</ul>

const item1 = document.getElementById('goSomowhere')
const item2 = document.getElementById('doSomething')
const item3 = document.getElementById('sayHI')

EventUtils.addHandler(item1, 'click', function(e) {
    location.href = 'xianzao.com'
})
EventUtils.addHandler(item2, 'click', function(e) {
    console.lo(123)
})
EventUtils.addHandler(item3, 'click', function(e) {
    alert('hello')
})


const list = document.getElementById('myLinks');

EventUtils.addHandler(list, 'click', function(e) {
   const event = EventUtils.getEvent('event')
   const target = EventUtils.getTarget('event')
})
  
  switch(target.id) {
    case 'goSomeWhere':
  }
```


