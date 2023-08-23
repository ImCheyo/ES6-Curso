const persona = ['Beneharo Bentor', 23, 'España'];

const [nombre, , pais, profesion = 'No especificado'] = persona;

const mostrarInfo = ([nombre, , pais] = persona ) => {
    console.log(nombre, pais);
}

mostrarInfo(persona)