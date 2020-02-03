//requireds

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('...---0000000000000000000000---...'.black.bgWhite);
    console.log(`...---00000 tabla del ${base}00000---...`.black.bgWhite);
    console.log('...---0000000000000000000000---...'.black.bgWhite);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base*i} \n`);
    }



}


// const fs = require('express');
// const fs = require('./');



let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        let data = '';


        for (let i = 1; i <= limite; i++) {

            data += `${base * i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)

                reject(err)

            else
                resolve(`tabla-${ base }.txt`);

        });

    });


}

module.exports = {
    crearArchivo,
    listarTabla
}