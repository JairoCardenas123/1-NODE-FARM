
/* --fs--  Es un modulo del sistema de archivos node.js, proporciona una interfaz para interactuar con el sistema de archivos del sistema operativo  */
const fs = require('fs')


/* 1. esta parte del codigo nos enseña a leers files tipo text y poder agregarlos en una cadena de string*/

/* --readFileSync--  es un metodo de fs, se utiliza para leer archivos, y Sync bloquea la ejecucion del codigo hasta que la lectura del archivo se complete */

const textIn = fs.readFileSync('./text/input.txt', 'utf-8')
console.log(textIn);

/* --Date.now-- devuelve milisegundos desde 1970, y el solo Date devuelve la fecha actual */


const textOut = `Jonas en su momento mas humilde escribiento ${textIn}.\nCreated on ${Date()}`

fs.writeFileSync('./text/input.txt',textOut)

console.log('File written!');


fs.readFile('./txt/start.txt', 'utf8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf8', (err,data2)=>{
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf8', (err,data3)=>{
            console.log(data3);
        })
    })
});

console.log('Will read file!');
