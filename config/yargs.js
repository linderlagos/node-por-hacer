const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true
};


const argv = require('yargs')
    .command('crear', 'Crear un nuevo por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar un por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}