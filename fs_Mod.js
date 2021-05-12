// const fs = require('fs')

/*     Asynchronous Way     */

// fs.writeFile('bio.txt','My name is Muhammad Siddik Akbar.',(err)=>{
//     if (err) throw err;
//     console.log('Write Successful')
// })
// fs.appendFile('bio.txt','\ni am 19 years old',(err)=>{
//     if (err) throw err;
//     console.log('Write Successful')
// })
// fs.readFile('bio.txt','utf8',(err,data)=>{
//     if (err) throw err;
//     console.log(data)
// })
// fs.rename('bio.txt','mybio.txt',(err)=>{
//     if (err) throw err;
//     console.log('file Renamed')
// })
// fs.unlink('mybio.txt',(err)=>{
//     if (err) throw (err);
//     console.log('file deleted')
// })

/*     Synchronous Way     */

// fs.writeFileSync('bio.txt','My name is Muhammad Siddik Akbar.')
// fs.appendFileSync('bio.txt','\ni am 19 years old')
// const data=fs.readFileSync('bio.txt','utf8')
// console.log(data)
// fs.renameSync('bio.txt','mybio.txt')
// fs.unlinkSync('mybio.txt')