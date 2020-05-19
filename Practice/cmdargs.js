const process=require('process')
var a = parseInt(process.argv[2])
var b = process.argv[3]
var c = parseInt(process.argv[4])
//var result=0

if (b=='+'){
    result = a + c
}else if (b=='-'){
    result= a-b
}

console.log(result)