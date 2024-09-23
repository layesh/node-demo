const { readFile, writeFile } = require('fs')

readFile('./contents/1.txt', 'utf8', (error, result) => {
  if (error) {
    console.log(error)
    return
  }
  const text1 = result
  readFile('./contents/2.txt', 'utf8', (error, result) => {
    if (error) {
      console.log(error)
      return
    }
    const text2 = result
    writeFile(
      './contents/combined-async.txt', text1 + text2, (error, result) => {
        if (error) {
          console.log(error)
          return
        }
        console.log('Done writing the file!')
      }
    )
  })
})