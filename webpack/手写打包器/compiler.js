const path = require('path')
const toUnixPath = require('./utils')
const { SyncHook } = require('tapable')
const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
const types = require('babel-types')


class Compiler {
    constructor(options) {
      this.options = options
      this.hooks = {
        run: new SyncHook(),
        done: new SyncHook(),
        emit: new SyncHook(),
      }
      this.entries = new Set() // 保存打包过程当中的入口信息
      this.modules = new Set() // 保存打包过程中所有出现的module 信息
      this.chunks = new Set() // 保存代码块信息
      this.files = new Set() // 保存所有产出文件的名称
      this.assets = {} // 资源清单
      this.context = this.options.context || process.cwd()
    }

    run() {
      this.hooks.run.call()
      // 01 确定入口信息
      let entry = {}
      if (typeof this.options.entry === 'string') {
        entry.main = this.options.entry
      } else {
        entry = this.options.entry
      }
      
      // 02 确定入口模块的绝对路径
      for (let entryName in entry) {
        // 获取绝对路径
        const entryPath = toUnixPath(path.join(this.context, entry[entryName]))

        //TODO: 调用自定义的方法来实现具体的编译过程，得到结果
        const entryModule = this.buildModule(entryName, entryPath)
      }

    }
    
    /**
     * module 返回一个打包之后的对象，包含了打包后的信息
     * @param {string} moduleName 当前被打包的模块名称
     * @param {string} modulePath 被打包模块的绝对路径
     */
    buildModule(moduleName, modulePath) {
       // 01 读取入口模块当中的源文件
       const originalSourceCode = fs.readFileSync(modulePath, 'utf-8')
       let targetSourceCode = originalSourceCode
      //  console.log(targetSourceCode)
       
       // 02 获取 loader
       let loaders = []
       const rules = this.options.module.rules
       
       for(let i = 0; i < rules.length; i ++) {
         if (rules[i].test.test(modulePath)) {
          loaders = [...loaders, ...rules[i].use]
         }
       }
       // 03 调用 loader
       for (let i = loaders.length -1; i >=0; i--) {
        targetSourceCode = require(loaders[i])(targetSourceCode)
       }

       // 04 获取模块 id (取相对路径)
        const moduleId = './' + path.posix.r/elative(toUnixPath(this.context), modulePath)

       // 05 定义变量保存将来编译之后的产出
       const module = {id: moduleId, dependencies: [], name: moduleName }
       
       // 06 使用 ast 语法树按着自己的需求来处理，然后将结果返回
       let ast = parser.parse(targetSourceCode, {sourceType: 'module'})
       traverse(ast, {
        CallExpression: (nodePath) => {
          const node = nodePath.node
          if (node.callee.name === 'require') {
            // 如果说这个条件成立就说明你找到require语句
            console.log(node.arguments[0].value)
          }
        }
       })

       // TODO：返回打包的结果
       // return module
    }
}

module.exports = Compiler