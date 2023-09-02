const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')


/** 
 * 分析单独模块
*/
function getModuleInfo(file) {

    // 读取文件
    const body = fs.readFileSync(file, 'utf-8')
    console.log('body' + body)
   // TODO 有哪些import项
   // TODO ES6 => ES5


}

getModuleInfo('./src/index.js')