// 栈与队列
// 执行顺序：栈 - 先进后出 队列 - 先进先出

// 面试题2： 实现一个栈
class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0
    }
    clear() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
}

// 实现
// 判断括号是否有效自闭和
// '{}[]' true, '{{}[]' false, '[{()}]' true

// 算法流程：
// 1. 需要什么样的数据结构、满足模型的数据 - 找特点 构造变量 & 常量
// 2. 确定输入输出 - 确定流程
// 3. 确认运行方式 简单的条件运行、还是遍历、递归  - 算法的主体结构填充

// 构造栈来存放当前信息

const isValid = function(s) {
    const stack = new Stack()
    const map = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        stack.push(char);

        if(stack.size() < 2) continue;

        const theLastOne = stack[stack.size() -1];
        const theLastTwo = stack[stack.size() -2];
        
        if(map[theLastOne] === theLastTwo) {
            stack.pop()
            stack.pop()
        }
    }

    return stack.size() === 0;
}