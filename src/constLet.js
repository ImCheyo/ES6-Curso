// Caracteristica #1
// Podemos re-declarar variables con var
// Esto puede causar problemas en donde re-declaremos sin darnos cuenta.

//var nombre = 'Beneharo';
//var nombre = 'Bentor';

//let pais = 'España';
//let pais = 'Mexico';

//console.log('Hola ' + pais);

//Caracteristica #2
//let y const también tienen un scope en el que no podemos acceder a las variables creadas dentro de una funcion.

//function saludo(){
//    let nombre = 'Beneharo';
//    return 'Hola ' + nombre;
//}

//console.log(saludo());
//console.log(nombre);

//Caracteristica #3
//let y const tienen un scope de tipo bloque

//let edad = 18;

//if(edad >= 18){
//    let esAdulto = true;
//}

//console.log(esAdulto);

//Caracteristica #4
//const lo usamos cuando queremos que el valor de una variable nunca cambie.
//const nombre = 'Beneharo';
//nombre = 'Bentor';

//console.log(nombre);

//const colores = ['Rojo', 'Verde'];
//colores.push('Azul');

//console.log(colores);

