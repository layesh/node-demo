const path = require('path')

console.log(path.sep)

const absolutePath = path.resolve(path.basename, __filename)
console.log(absolutePath)