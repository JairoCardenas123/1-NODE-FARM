# QUE ES NODEJS?

Es un entorno de ejecucion de codigo abierto la cual permite escribir codigo javascript al lado del servidor,
excelente para contruir aplicaciones web y servicios al lado del cliente.

Caracteristicas de NodeJs
-

-V8 Engine: Se basa en el motor de google V8, es un motor de javascript de alto rendimiento utilizado en los navegadores de google Chrome, V8 compila  y ejecuta el codigo de manera eficiente

Event Loop: Node.js utiliza un modelo de programación asíncrona y basada en eventos. Esto significa que las operaciones no bloqueantes como la lectura/escritura de archivos o las solicitudes de red se gestionan de manera eficiente sin detener la ejecución del programa.

Módulos y NPM: Node.js utiliza el sistema de módulos CommonJS, lo que permite la organización del código en módulos reutilizables. Node Package Manager (NPM) es una herramienta que se utiliza para instalar, administrar y compartir paquetes de código JavaScript de terceros. NPM es fundamental en el ecosistema de Node.js.

APIs del Sistema Operativo: Node.js proporciona APIs para interactuar con el sistema operativo, lo que permite realizar tareas como lectura/escritura de archivos, manipulación de rutas, gestión de procesos, etc.

Amplia Comunidad: Node.js tiene una comunidad activa y numerosos paquetes y bibliotecas disponibles en NPM que facilitan el desarrollo de una variedad de aplicaciones.

Aplicaciones en Tiempo Real: Node.js es muy adecuado para aplicaciones en tiempo real como chat en línea, juegos multijugador y aplicaciones de colaboración en tiempo real, debido a su capacidad para manejar muchas conexiones simultáneas en una sola máquina.


# TIPOS DE MODULOS EN NODEJS

Modulos Core
--

-Son modulos integrados en nodejs y estan disponibles de forma prederteminada

```javascript
require(http)
require(fs)
```

Modulos Nativos
--

-Son modulos creados por nosotros la cual utilizamos al desarrolo

```javascript
require('./lib/controller')
```

Mdoulos de NPM
--

-Son modulos terceros de npm la cual instal amos

```javascript
require('express')
require('mongoose')
```


# AṔRENDIDO POR EL MOMENTO DEL CURSO DE NODE.JS

Fs
--

Modulo de Node la cual nos permite manipular archivos del sistema operativo

ReadFileSync
------------
Es un metodo de fs, Permite leer archivos txt de forma sincronica

```javascript
const textIn = fs.readFileSync('./txt/start.txt', 'utf-8')
console.log(textIn); */
```

Date - Date.now
---------------
Muestra la fecha actual / Muestra en milisengundos el tiempo que ha pasado desde 1970  

```javascript
const textOut = `Jonas en su momento mas humilde escribiento ${textIn}.\nCreated on ${Date()}
```

WriteFileSync
-------------
Este metodo nos sirve para poder escribir dentro de un archivo txt con otro archivo txt

```javascript
fs.writeFileSync('./txt/start.txt',textOut)
console.log('File written!');
```

Call-Back
---------
carga información desde archivos, la combina y luego guarda el resultado en otro archivo

```javascript
fs.readFile('./txt/start.txt', 'utf8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf8', (err,data2)=>{
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf8', (err,data3)=>{
            console.log(data3);

            fs.writeFile('./txt/final.txt' , `${data2}\n${data3}`,  'utf8' , err =>{
                console.log('Your file has been write :DD');
            } )
        })
    })
});
```

SERVER
------
 función llamada replaceTemplate que toma dos argumentos: temp y product. Parece que esta función se encarga de reemplazar ciertas etiquetas dentro de un "template" con los valores correspondientes del objeto product.

```javascript
const replaceTemplate = (temp,product) =>{
    let output = temp.replace(/{%PRODUCTNAME%}/g,product.productName)
    output = output.replace(/{%IMAGE%}/g,product.image)
    output = output.replace(/{%PRICE%}/g,product.price)
    output = output.replace(/{%FROM%}/g,product.from)
    output = output.replace(/{%NUTRIENTES%}/g,product.nutrients)
    output = output.replace(/{%QUANTITY%}/g,product.quantity)
    output = output.replace(/{%DESCRIPTION%}/g,product.description)
    output = output.replace(/{%ID%}/g,product.id)

    if(!product.organic)output = output.replace(/{%IMAGE%}/g,product.image)
}
```

__dirname  
---------
variable especial que obtiene la ruta absoluta del archivo

tempOverview,tempCard,tempProduct 
---------------------------------
 variables que almacenan el contenido de tres archivos HTML

data 
----
variable que almacena el contendio de un archivo JSON

dataObj 
-------
parseamos o volvemos cadena la variable que contenia el JSON guardado

```javascript

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8',)
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8',)
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8',)

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8',)
const dataObj = JSON.parse(data);

```






