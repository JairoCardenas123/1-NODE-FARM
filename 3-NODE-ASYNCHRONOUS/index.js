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
     
        const res1Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)

        const res2Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)

        const res3Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)

        const all = await Promise.all([res1Pro,res2Pro,res3Pro])
        const imgs = all.map(el => el.body.message)
        console.log(all);
     
        await writeFilePro('dog-img.txt', imgs.join('\n'))
        console.log('Imagen de un perro aleatorio guardada en el archivo');
    } catch (error) {
        console.log(error);
    }

    return '2:READY'
  


}

(async()=>{
    try {
        console.log('1.will get dog pics');
        const x = getDogPic();
        console.log(x);
        console.log('3.Done Getting dog pics');

    } catch (error) {
        console.log('ERROR');
    }
})();

/* console.log('1.will get dog pics');
getDogPic().then(x => {
    console.log(x);
console.log('3.Done Getting dog pics');
}).catch(err =>{
    console.log(err);
})
 */

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
