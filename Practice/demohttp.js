const http=require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/plain'});
    res.write('Hello world')
    res.end()
}).listen(8080);