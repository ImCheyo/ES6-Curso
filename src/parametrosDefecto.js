function registrarUsuario(nombre, pais = 'No especificado', correo, telefono = 'No especificado'){
    return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Telefono: ${telefono}`;
}

console.log(registrarUsuario('Beneharo', undefined, 'correo@correo.com', '123456789'));