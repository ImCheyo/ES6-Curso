"use strict";

var texto = 'Hola mundo!';
console.log(texto, 'empieza con H:', texto.toLowerCase().startsWith('h'));
console.log(texto, 'termina con o:', texto.toLowerCase().endsWith('o'));
console.log(texto, 'incluye la palabra beneharo', texto.includes('beneharo'));
var amigos = ['Carlos', 'Cesar', 'Alejandro', 'Manuel'];
console.log(amigos.includes('Manuel'));
console.log(amigos.find(function (amigo) {
  return amigo.length > 6;
}));
console.log(amigos.findIndex(function (amigo) {
  return amigo === 'Manuel';
}));