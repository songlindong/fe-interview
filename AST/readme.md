# AST & 脚手架的实现

## AST 抽象语法树
编译器: compiler

从一种语言转为另一中语言

JSX -> babel -> js ES6+ -> ES5

- less/sass
- ts/coffescript
- eslint

#### 编译器的基本思路

1. parser
  1. 词法分析: lexial analysis
    将代码转为token；
    去除注释、空格、回车等无效的字符
     - 生成方式
      - 使用正则分析：需要大量正则语言、正则间可能有冲突，可维护成本太高，更适合简单语言模板
      - 使用自动机：有限状态自动机：在有限的输入中，可以将状态转移，并最终能够达到终止状态

  2. 语法分析: syntactic analysis
   AST：抽象语法树
     babel: ES6+ -> Babylon.parser -> AST -> babel.traverse -> 新的AST -> ES5

2. tranform
  - 代码转换：从一种AST转为另一种AST
  - 特点
   - 可移植性强：跟宿主环境无关，可以通过中间语言生成不同端的语言
   - 数据结构清晰
3. generation
 - 递归生成AST
4. compiler
```js
1. input -> tokenizer -> tokens
2. token -> parser -> ast
3. ast -> transform -> new ast
4. new ast -> generator -> output
```

#### 如何生成一个简单的编译器