const http=require('http')
const fs = require('fs')
http.createServer((req,res)=>{
    if (req.url == '/'){
        res.end('It is Home')
    }else if(req.url == '/about'){
        res.end('it is about section')
    }else if(req.url == '/contact'){
        res.end('it is contact section')
    }
    else if(req.url == '/home'){
        res.end('it is home section')
    }else if(req.url == '/userapi'){
        fs.readFile('app.json','utf8',(err,data)=> {
           res.end(data)
        })
    }
    else{
        res.writeHead(404,{'Content-type':'text/html'})
        res.end('<h1>Error 404</h1>')
    }
}).listen(8000)