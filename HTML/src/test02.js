// - 两个栈模拟队列 可以数组来写，数组只能用 push，pop 方法。实现队列的 push\pop

//     1. [1, 2, 3, 4]

//     2. push(5) [1, 2, 3, 4, 5]

//     3. pop() [2, 3, 4, 5]

//     4. pop() [3, 4, 5]

//     5. push(6) [3, 4, 5, 6]

class quene{
    constructor() {
     this.stack = []
    }

    push(value) {
      return this.stack.push(value)
    }
    pop() {
     return this.stack.splice()
    }
}
let arr1 =  [1, 2, 3, 4]
const arr = new quene()
  arr.push(5)
  arr.pop()