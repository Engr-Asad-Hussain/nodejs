const { readFile, writeFile } = require('fs').promises

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const gatherFiles = async () => {
  try {
    // Read Text Files
    const first = await readFile('./content/first.txt', 'utf-8')
    const second = await readFile('./content/second.txt', 'utf-8')
    console.log(first, second)

    // Write Text File
    await writeFile(
      './content/mind-async.txt', 
      `This is Awesome: ${first}, ${second}`,
      { flag: 'a' }
    )
  } catch (error) {
    console.log(error)
  }
}

gatherFiles()