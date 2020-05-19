const express = require('express')
const fs = require('fs')
const app = express()
const port=8080

app.listen(port,(err)=>{
    if (err) throw err
    console.log('server running on '+port)
})

app.get('/',(req,res)=>{
    res.send('<h1> hello world</h1>')
})

app.get('/getjson',(req,res)=>{
    fs.readFile('Sample.json',(err,data)=>{
        if(err){
            throw err;
        }else {
            res.send(JSON.parse(data))
        }
    })
})
/*
// Read file using express server
app.get('/getMovies', (req,res) => {
    fs.readFile('./Demo16_json.json',(err,result) => {
        if(err){
            throw err;
        }else {
            res.send(JSON.parse(result))
        }
    })
})
*/