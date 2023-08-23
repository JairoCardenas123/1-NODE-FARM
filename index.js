
/* --fs--  Es un modulo del sistema de archivos node.js, proporciona una interfaz para interactuar con el sistema de archivos del sistema operativo  */
const fs = require('fs')
const http = require('http')
const url = require('url')

 const slugify = require('slugify')

const replaceTemplate = require('./modules/replaceTemplate')
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


const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8',)
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8',)
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8',)

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8',)
const dataObj = JSON.parse(data);

const slugs = dataObj.map(el => slugify(el.productName,{lower:true}))
console.log(slugs);
console.log(slugify('Fresh Avocados',{lowercase:true}));


const server = http.createServer((req,res)=>{
    const { query,pathname} = url.parse(req.url, true) ;

    //Overview page
    // Dentro del bloque para la página de resumen (overview)
if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' })

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)

/*     console.log(cardsHtml);
/*  */     /* const overviewPage = tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml);  */
 
    res.end(output);
}
 else if (pathname === '/product'){
    res.writeHead(200, { 'Content-type': 'text/html' })
    const product = dataObj[query.id]
    const output = replaceTemplate(tempProduct, product)
    res.end(output)

    //API    
    } else if(pathname === '/api'){
        res.writeHead(200, {' Content-type':'application/json'})
        res.end(data);

    //Not found    
    }else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header' : 'hello-world'
        })
        res.end('<h1>Page not foudd</h1>')
    }
    
})

server.listen(8000, '127.0.0.1', () =>{
    console.log('Listening to request en port 8000');
})
 
