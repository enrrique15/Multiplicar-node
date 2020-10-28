// const fs = require('express');
// const fs = require('./fs');
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./mulltiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Listado de tabla del:${archivo}`))
            .catch(e => console.log(e))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado:${archivo.red}`))
            .catch(e => console.log(e))
        break;


    default:
        console.log('comando no reconocido');
        break;
}
//let base = '4';

//console.log(process.argv);
//let argv2 = process.argv;
//console.log('limite', argv.limite);
/* let parametro = argv[2];
let base = parametro.split('=')[1]; */

//console.log(base);