const fs = require('fs')
/* 
const textIn = fs.readFileSync('./txt/start.txt','utf8')
console.log(textIn);

const textOut = `Jonas anda en ${textIn}\nCreated in ${Date()} , ` 
console.log(textOut);
 */
/* const hello = 'hello world';
console.log(hello); */

//Non-block


fs.readFile('./txt/start.txt', 'utf8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf8', (err,data2)=>{
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf8', (err,data3)=>{
            console.log(data3);
        })
    })
});

console.log('Will read file!');
