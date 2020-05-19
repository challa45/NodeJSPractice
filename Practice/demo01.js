const fs= require('fs')
/*fs.writeFile('app.txt','this is first program in node js',(err,data)=>{
if (err) throw err
console.log('data inserted')
});*/

fs.unlink('./app.txt',(err,data)=>{
    if(err) throw err
    console.log('file delted')
})