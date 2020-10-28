const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        demand: true
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la talbla de multiplicar', opts)
    .command('Crear', 'Genera la tabla de multiplicar', opts)
    .help().argv;

module.exports = {
    argv
}