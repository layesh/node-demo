const { readFile, writeFile } = require('fs').promises;

const mergeFile = async () => {
    try {
        const fileContent1 = await readFile('./contents/1.txt', 'utf8')
        const fileContent2 = await readFile('./contents/2.txt', 'utf8')

        await writeFile('./contents/combined-async-await.txt', fileContent1 + fileContent2, { flag: 'a' })
    } catch (error) {
        console.log(error)
    }
}

mergeFile()