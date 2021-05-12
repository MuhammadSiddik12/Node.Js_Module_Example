const fs = require('fs')
const http = require('http')

// const server = http.createServer();
// server.on('request',(req,res)=>{
//     const rstream = fs.createReadStream('input.txt')
//     rstream.on('data',(chunkdata)=>{
//         res.write(chunkdata)
//     })
//     rstream.on('end',()=>{
//         res.end()
//     })
//     rstream.on('error',(err)=>{
//         console.log(err)
//         res.end('file not found')
//     })
// })
// server.listen(8001)

const server = http.createServer();
server.on('request',(req,res)=>{
    const rstream = fs.createReadStream('input.txt')
    rstream.pipe(res)
})
server.listen(8001)