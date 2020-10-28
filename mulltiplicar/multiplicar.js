const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`La base ${base} o el liminte: ${limite} no es un numero`);
            return;
        }
        let data = '';
        for (let x = 1; x <= limite; x++) {
            data += `${base} * ${x} = ${base*x}\n`;

        }
        resolve(data)


    })
}
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`La base ${base} o el liminte: ${limite} no es un numero`);
            return;
        }
        let data = '';
        for (let x = 1; x <= limite; x++) {
            data += `${base} * ${x} = ${base*x}\n`;

        }
        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`La Tabla-${base}.txt`);

        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}