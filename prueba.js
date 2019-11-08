function holaMundo(nombre) {
    return "Hola mundo, soy " + nombre;
}
var nombre = "Pablo";
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = holaMundo(nombre);
// alert("alert");
// variables y tipos
var nombreDos = "Pablo";
var edad = 26;
var programador = true;
var lenguajes = ["PHP", "Java", "Python"];
// any permite cualquier tipo de dato
var pais = "jamaica";
etiqueta.innerHTML = nombre + " - " + edad;
// var y let
// var tiene alcance a nivel global, let a nivel de bloque
var a = 10;
var b = 20;
if (a === 10) {
    var a_1 = 5;
    var b = 30;
    console.log("ADENTRO DEL BLOQUE: A => " + a_1 + " B => " + b);
}
console.log("AFUERA DEL BLOQUE: A => " + a + " B => " + b);
// funciones y tipado
// 
function devuelveNumero(num) {
    return "Numero devuelto " + num;
}
alert(devuelveNumero(5));
function devuelveString(texto) {
    if (texto == "hola") {
        var num = 10;
    }
    else {
        var num = 1000;
    }
    return num;
}
alert(devuelveString("hola0"));
