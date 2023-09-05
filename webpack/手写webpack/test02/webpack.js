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
    const body = fs.readFileSync(file, "utf-8");
  
    // 转化AST语法树
    const ast = parser.parse(body, {
      sourceType: "module", //表示我们要解析的是ES模块
    });
  
    // 依赖收集
    const deps = {};
    traverse(ast, {
      ImportDeclaration({ node }) {
        const dirname = path.dirname(file);
        const abspath = "./" + path.join(dirname, node.source.value);
        deps[node.source.value] = abspath;
      },
    });
  
    // ES6转成ES5
    const { code } = babel.transformFromAst(ast, null, {
      presets: ["@babel/preset-env"],
    });
    const moduleInfo = { file, deps, code };
    return moduleInfo;
  }

getModuleInfo('./src/index.js')

// console.log('info', info)

/**
 * 解析模块
 */
 function parseModules(file) {
    const entry = getModuleInfo(file);
    const temp = [entry]
    const depsGraph = {}

    getDeps(temp, entry)

    temp.forEach(info => {
        depsGraph[info.file] = {
            deps: info.deps,
            code: info.code
        }
    })

    return depsGraph
 }
//  /**
//   * 获取依赖
//   */
 function getDeps(temp, {deps}) {
    Object.keys(deps).forEach(key => {
        const child = getModuleInfo(deps[key])
        temp.push(child)
        getDeps(temp, child)
    })
 }

const content = parseModules('./src/index.js')
console.log("content", content)