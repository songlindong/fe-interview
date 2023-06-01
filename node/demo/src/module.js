const { readFileSync } = require('fs')
const path = require('path')
const { Script } = require('vm')

function my_require(filename){
    console.log(12122)
    const fileContent = readFileSync(path.resolve(__dirname, filename), 'utf-8')

    const warpped = `(function(require, module, exports){
        ${fileContent}
    })`
    
    const script = new Script(warpped, {
        filename: 'index.js'
    })

    const module = {
        exports: {}
    }

    const func = script.runInContext();
    func(my_require, module, module.exports)

    return module.exports
}

my_require('./module.js')