const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(new Error('No pude encontrar ese archivo'));
            } else {
                resolve(data);
            }
        });
    });
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) {
                reject(new Error('No se pudo escribir el archivo'));
            } else {
                resolve('success');
            }
        });
    });
}

const getDogPic = async()=>{
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`)
        console.log(`Raza: ${data}`);
     
        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
        console.log(res.body.message);
     
        await writeFilePro('dog-img.txt', res.body.message)
        console.log('Imagen de un perro aleatorio guardada en el archivo');
    } catch (error) {
        console.log(error);
    }

    return '2:READY'
  


}
console.log('dassdasdsa');
const x = getDogPic()
console.log(x);
console.log('dassdasdsa');

/* readFilePro(`${__dirname}/dog.txt`)
    .then(data => {
        console.log(`Raza: ${data}`);
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    })
    .then(res => {
        console.log(res.body.message);
        return writeFilePro('dog-img.txt', res.body.message)
    })
    .then(() => {
        console.log('Imagen de un perro aleatorio guardada en el archivo');
    })
    .catch(err => {
        console.log(err.message);
    }) */
