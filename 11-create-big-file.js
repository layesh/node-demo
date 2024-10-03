const { writeFileSync } = require('fs')

for (let i = 0; i <= 1000; i++) {
    writeFileSync('./contents/bigfile.txt', `hello world ${i}\n`, { flag: 'a' })
}