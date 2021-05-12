const http = require('http')
const server = http.createServer((req,res)=>{
    res.write('<h1>Hello World</h1>')
    res.end()
})
server.listen(3001,()=>{
    console.log('server is running')
})