const { readFile } = require('fs')

// readFile('./content/first.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

const getText = (filePath) => {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

getText('./content/first.txt')
  .then(result => console.log(result))
  .catch(error => console.log(error))