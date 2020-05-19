const fs = require('fs')
const yargs = require('yargs')

var arg= yargs.argv._

if (process.argv[2]==undefined){
    console.log('Kinldy provide atleast one file name')
}else{
    arg.forEach(Element=>{
        fileName = Element + '.txt'
        if (fs.existsSync(fileName)){
            console.log(fileName+' File already exists kinldy provide new file name')
        }else{
            fs.writeFile(fileName,'Youareawesome',(err,data)=>{
                if(err) throw err
                console.log('file creted and data written into' + fileName+' file')
            })

            fs.appendFile('filelist.txt',fileName,(err,name)=>{
                if(err) throw err
                console.log('file names appended '+Element)
            })
        }
    })
    
}

