
/* --fs--  Es un modulo del sistema de archivos node.js, proporciona una interfaz para interactuar con el sistema de archivos del sistema operativo  */
const fs = require('fs')
const http = require('http')
///////////////////////////////
//HTTP

/* 1. esta parte del codigo nos enseña a leers files tipo text y poder agregarlos en una cadena de string*/

/* --readFileSync--  es un metodo de fs, se utiliza para leer archivos, y Sync bloquea la ejecucion del codigo hasta que la lectura del archivo se complete */
/* 
const textIn = fs.readFileSync('./txt/start.txt', 'utf-8')
console.log(textIn); */

/* --Date.now-- devuelve milisegundos desde 1970, y el solo Date devuelve la fecha actual */

/////////////////////////////////////////////////////////////////////////////////////////////////
//const textOut = `Jonas en su momento mas humilde escribiento ${textIn}.\nCreated on ${Date()}`
//
//fs.writeFileSync('./txt/start.txt',textOut)
//
//console.log('File written!');
//
//
//fs.readFile('./txt/start.txt', 'utf8', (err, data1) => {
//    fs.readFile(`./txt/${data1}.txt`, 'utf8', (err,data2)=>{
//        console.log(data2);
//        fs.readFile(`./txt/append.txt`, 'utf8', (err,data3)=>{
//            console.log(data3);
//
//            fs.writeFile('./txt/final.txt' , `${data2}\n${data3}`,  'utf8' , err =>{
//                console.log('Your file has been write :DD');
//            } )
//        })
//    })
//});
//
//console.log('Will read file!');

//////////////////////////////////////////////////
//SERVER

const server = http.createServer((req,res)=>{
    res.end('Hello from the server')
})

server.listen(8000, '127.0.0.1', () =>{
    console.log('Listening to request en port 8000');
})
 
