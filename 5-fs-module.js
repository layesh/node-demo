const { readFileSync, writeFileSync } = require('fs')
const file1 = readFileSync('./contents/1.txt', 'utf8')
const file2 = readFileSync('./contents/2.txt', 'utf8')

writeFileSync('./contents/combined.txt', file1 + file2, { flag: 'a' })