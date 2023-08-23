const usuario = {
    nombre: 'Beneharo',
    correo: 'correo@correo.com',
    edad: 21,
    pais: 'España',
    profesion: 'Desarrollador'
}

const {nombre, pais, profesion = 'No especificado'} = usuario;

const mostrarInfo = ( { nombre, profesion = 'Estudiante' } ) => console.log(`${nombre} es ${profesion}`);

mostrarInfo(usuario)