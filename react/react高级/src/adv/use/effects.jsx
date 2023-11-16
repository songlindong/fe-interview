import React, { useState, useEffect, useLayoutEffect, useInsertionEffect } from 'react'

export default function Effects(props) {

  const [ count, setCount ] = useState(0);
  const [ num, setNum] = useState(100)
  // useEffect 的第二个参数，表示依赖项，当我的依赖项发生改变时，我也会执行。
  // 所以 useEffect，其实就是一个数据的“副作用”，当我需要给一些数据添加“副作用”的时候
  // 我会把数据放在数组里，并且，将副作用，作为函数，传递进去。
  // 所以在模拟生命周期这件事情上
  // 不填，类似于 updated / componentDidUpdate
  // 空数组，类似于 mounted / componentDidMount 
  // 如果传了 props，类似于 componentWillReceiveProps 
  // 返回值，是销毁函数，相当于 componentWillUnmount
  useEffect(() => {
    // cdm 是同步执行的，在react 的执行栈中，useEffect 是 异步的。
    console.log('mock: componentDidMount');
    return () => {
      console.log('mock: componentWillUnmount')
    }
  }, []);

  useLayoutEffect(() => {
    console.log('this is use layout Effect')
  })

  useInsertionEffect(() => {
    console.log('this is use Insertion Effect')
  })

  useEffect(() => {
    // cdu 是同步执行的，在react 的执行栈中，useEffect 是 异步的。
    console.log('mock: componenDidUpdate')
  }, [count])

  useEffect(() => {
    console.log('mock: componentWillReceiveProps')
  }, [props])

  return (
    <div>
      <div>{count} --- {num}</div>
      <div>
        {
          [1,2,3].map((item) => {
            console.log(item)
            return <div key={item}>{item}</div>
          })
        }
      </div>
      <button onClick={() => setCount(count + 1)} >+</button>
      <button onClick={() => setNum(num - 1)} >+</button>
    </div>
  )
}

// 纯函数

let b = 10

function add (a) {
  return a + b;
}

function get10(a) {
  return a * 10
}

// useLayoutEffect 执行时机，要比 uesEffect 早一些，如果要改变布局，修改 DOM 就用 useLayoutEffect

/**
 * 举一个简单的例子。
 *   beginWork - CompleteWork      CommitWork
 *    vdom ->    已经有 dom 了   ->  dom 上浏览器绘制  
 *                     useLayoutEffect              uesEffect(回流和重绘)
 *       useInsectionEffect (解决 css-in-js 在渲染中的样式注入问题)
 */

