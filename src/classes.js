class Usuario {
    constructor(nombre, edad, correo){
        this.nombre = nombre,
        this.edad = edad;
        this.correo = correo;
    }

    mostrarSaludo(mensaje){
        return mensaje;
    }

    mostrarInfo(){
        return `
            <b>Nombre:</b> ${this.nombre} <br />
            <b>Edad:</b> ${this.edad} <br />
            <b>Correro:</b> ${this.correo} <br />
            <hr />
        `;
    }
}

class Estudiante extends Usuario{
    constructor(carrera, nombre, edad, correo){
        super(nombre, edad, correo);
        this.carrera = carrera;
    }

    mostrarInfo(){
        return `
            <b>Nombre:</b> ${this.nombre} <br />
            <b>Edad:</b> ${this.edad} <br />
            <b>Correro:</b> ${this.correo} <br />
            <b>Carrera:</b> ${this.carrera} <br />
            <hr />
        `;
    }
}

const beneharo = new Usuario('Beneharo Bentor', 21, 'correo@correo.com');
document.write(beneharo.mostrarInfo());

const alejandro = new Estudiante('Alejandro', 23, 'correo2@correo.com', 'Informatica');
document.write(alejandro.mostrarInfo());

