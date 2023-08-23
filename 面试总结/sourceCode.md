# 防抖函数的实现
```html
 <button onclick="debounceClickTest()">防抖测试</button>
<script>
   const debounceClickTest = debounce(function () {
      console.log(444)
   }, 3000)

   function debounce(fn, wait) {
    let timer = null;

    return funciton () {
        let _this = this
        args = arguments

        if (timer) {
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(() => {
            fn.apply(_this, args)
        }, wait)
    }
   }
</script>
```
# 节流函数的实现

```js
  function throttle(fn, delay) {
     let currentTime = Date.now();

     return function () {
        let now = Date.now();
        let _this = this;
        args = argument;

        if (now - currentTime >= delay) {
            currentTime = Date.now();
            fn.apply(_this, args)
        }
     }
  }
```
# 深拷贝的实现

```js
  function deepCopy(obj) {
    if(!obj || typeof obj !== 'object') return

    let result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
        }
    }
    return result
  }
```
# JS 数值千分位分隔

## 数组转字符串遍历拼接

```js
 function  format(number) {
    const [int, fraction] = String(number).split('.')

    const intArr = int.split('')

    let res = ''

    intArr.forEach((item, index) => {
        if (index !==0 && index % 3 === 0) {
            res = res + ',' + item
        } else {
            res = res + item
        }
    })

    return res + (!!fraction ? `.${fraction}` : '')
 }
```

## 字符串 + substring 截取
```js
 function  format(number) {
    const [int, fraction] = String(number).split('.')

    const f = int.length % 3

    let res = int.substring(0, f)

    for (let i =0; i < Math.floor(int.length / 3); i++) {
        res += ',' + int.substring(f + i * 3, f + (i + 1) * 3)
    }

    if (f === 0) {
        res = res.substring(1)
    }

    return  res + (!!fraction ? `.${fraction}` : '')
 }
```