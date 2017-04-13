var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("Practica 1");
var mensaje = "Hola";
if (true) {
    var mensaje_1 = "Adios";
}
console.log(mensaje);
console.log("Practica 2");
var OPCIONES = "MI CONSTANTE";
console.log(OPCIONES);
console.log("Practica 3");
var nombre = "Peter";
var numero = 123;
var booleano = true;
var hoy = new Date();
var cualquiera;
cualquiera = nombre;
console.log(cualquiera);
cualquiera = numero;
console.log(cualquiera);
cualquiera = booleano;
console.log(cualquiera);
cualquiera = hoy;
console.log(cualquiera);
var spiderman = {
    nombre: nombre,
    edad: numero
};
spiderman = {
    nombre: "otro",
    edad: 24
};
console.log("Practica 4");
var nombre4 = "Juan";
var apellido4 = "Perez";
var edad4 = 23;
console.log("Hola," + " " + nombre4 + " " + apellido4 + " " + edad4);
console.log("Hola, " + nombre4 + " " + apellido4 + " " + (edad4 + 1));
console.log("Practica 5");
//parametros obligatorios, opcionales y predeterminados
function activar5(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo la " + objeto;
    }
    console.log(mensaje);
}
activar5("Gordon");
activar5("Gordon", "batiseñal", "tarde");
console.log("Practica 6");
//Funciones en Flecha
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncionF2 = function (a, b) { return a + b; };
console.log(miFuncion2(1, 2));
console.log(miFuncionF2(1, 2));
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFunction3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion3("bruce"));
console.log(miFunction3F("bruce"));
var hulk = {
    nombre: "Hulk",
    smash: function () {
        console.log(this.nombre + " smash!!");
    }
};
hulk.smash();
var hulkTime = {
    nombre: "Hulk",
    smash: function () {
        setTimeout(function () {
            console.log(this.nombre + " smash!!");
        }, 1500);
    }
};
hulkTime.smash();
var hulkTimeF = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulkTimeF.smash();
console.log("Practica 7");
//Destructuración
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
var nombre7 = avenger.nombre;
var clave7 = avenger.clave;
var poder7 = avenger.poder;
console.log(nombre7, clave7, poder7);
//Destructuración
var avenger2 = {
    nombre2_7: "Steve",
    clave2_7: "Capitan America",
    poder2_7: "Droga"
};
var nombre2_7 = avenger2.nombre2_7, clave2_7 = avenger2.clave2_7, poder2_7 = avenger2.poder2_7;
console.log(nombre7, clave7, poder7);
var nombreA7 = avenger2.nombre2_7, claveA7 = avenger2.clave2_7, poderA7 = avenger2.poder2_7;
console.log(nombreA7, claveA7, poderA7);
//Destructuración de arreglos
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(thor, capi, ironman);
console.log("Practica 8");
//Promesas
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        //termina bien
        //resolve();
        //termina mal
        reject();
    }, 1500);
});
prom1.then(function () { return console.log("Ejecutarme cuando sale bien"); }, function () { return console.log("Ejecutarme cuando sale mal"); });
console.log("Practica 9");
var enviarMision = function (xmen) {
    console.log("Enviando a: " + xmen.nombre);
};
var enviarCuartel = function (xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
};
var wolvering9 = {
    nombre: "Wolvering",
    poder: "Regeneración"
};
enviarMision(wolvering9);
enviarCuartel(wolvering9);
console.log("Practica 10");
//Clases en TypeScript
var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Antman";
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "cap", "Scott Lang");
console.log(antman);
console.log("Practica 11");
//Modulos
console.log("Practica 12");
//Decoradores
var consola = function (constructor) { return console.log(constructor); };
// function consola ( constructor:Function ) {
//   console.log( constructor );
// }
var Villano = (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    return Villano;
}());
Villano = __decorate([
    consola
], Villano);
console.log("Practica 13 (Examen)");
// Uso de Let y Const
var nombreExm = "Ricardo Tapia";
var edadExm = 23;
var PERSONAJEXM = {
    nombreExm: nombreExm,
    edadExm: edadExm
};
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }
var resultadoDoble = function (a, b) { return (a + b) * 2; };
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, arma, poder) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
}
;
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var Rectangulo = (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.getArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
console.log("Practica 11");
console.log("Practica 11");
console.log("Practica 11");
console.log("Practica 11");
console.log("Practica 11");
console.log("Practica 11");
console.log("Practica 11");
console.log("Practica 11");
