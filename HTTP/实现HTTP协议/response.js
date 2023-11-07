class Response {
    constructor() {
        this.statusCode = 200;
        this.headers = {};
        this.body = ''
    }
    parse(str) {
        const lineReg = /[^\r]*\r\n/g

        while (true) {
           let lineStr =  lineReg.exec(str)
           if (!lineStr || lineStr[0] === '\r\n') {
              break
           }
           if (lineStr && (!lineStr[0].startsWith('HTTP'))) {
              const [key, value] = lineStr[0].split(': ')
              this.headers[key] = value
           }
        }
        console.log(this.headers)

        while (true) {
            let lineStr = lineReg.exec(str)
            const start = lineReg.lastIndex
            const bodyStrLen = parseInt(lineStr,16)
            console.log(bodyStrLen)
            if (bodyStrLen ===0 || !bodyStrLen) {
                break
            }
            // console.log(lineStr, parseInt(lineStr, 16))
            console.log(str.slice(start, start + bodyStrLen))
            lineReg.lastIndex += bodyStrLen+1
        }
    }
}

module.exports = Response

// const str = 'i am teapot'
// const reg = /[a-z]+ |[a-z]+$/ig

// console.log(reg.exec(str))
// console.log(reg.lastIndex)
// console.log(reg.exec(str))
// console.log(reg.lastIndex)
// console.log(reg.exec(str))
// console.log(reg.lastIndex)