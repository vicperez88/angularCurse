
console.log("Practica 1");
let mensaje = "Hola";
if (true) {
  let mensaje = "Adios";
}
console.log(mensaje );

console.log("Practica 2");
const OPCIONES = "MI CONSTANTE";
console.log( OPCIONES );

console.log("Practica 3")
let nombre : string = "Peter";
let numero : number = 123;
let booleano : boolean = true;
let hoy : Date = new Date();
let cualquiera : any;

cualquiera = nombre;
console.log( cualquiera );
cualquiera = numero;
console.log( cualquiera );
cualquiera = booleano;
console.log( cualquiera );
cualquiera = hoy;
console.log( cualquiera );

let spiderman = {
  nombre : nombre,
  edad : numero
}

spiderman = {
  nombre : "otro",
  edad : 24
}

console.log("Practica 4");
let nombre4 : string = "Juan";
let apellido4 : string = "Perez";
let edad4 : number = 23;
console.log("Hola," + " " + nombre4 + " " + apellido4 + " " + edad4);
console.log(`Hola, ${ nombre4 } ${apellido4} ${edad4 + 1}`);

console.log("Practica 5");
//parametros obligatorios, opcionales y predeterminados
function activar5( quien : string,
  objeto : string = "batiseñal",
  momento? : string) {

  let mensaje : string;
  if ( momento ) {
    mensaje = `${ quien } activo la ${objeto} en la ${momento}`
  } else {
    mensaje = `${ quien } activo la ${objeto}`
  }
  console.log(mensaje);

}

activar5("Gordon");
activar5("Gordon", "batiseñal", "tarde");

console.log("Practica 6");
//Funciones en Flecha
let miFuncion = function (a){
  return a;
}
let miFuncionF = a => a;
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));

let miFuncion2 = function ( a : number, b : number ) {
  return a + b;
}
let miFuncionF2 = ( a:number, b:number) => a+b;
console.log(miFuncion2(1,2));
console.log(miFuncionF2(1,2));
let miFuncion3 = function ( nombre:string ) {
  nombre = nombre.toUpperCase();
  return nombre;
}
let miFunction3F = ( nombre:string ) => {
  nombre = nombre.toUpperCase();
  return nombre;
}
console.log(miFuncion3("bruce"));
console.log(miFunction3F("bruce"));
let hulk = {
  nombre: "Hulk",
  smash(){
    console.log(this.nombre + " smash!!");
  }
}
hulk.smash();
let hulkTime = {
  nombre: "Hulk",
  smash(){
    setTimeout( function() {
      console.log(this.nombre + " smash!!");
    }, 1500 )

  }
}
hulkTime.smash();
let hulkTimeF = {
  nombre: "Hulk",
  smash(){
    setTimeout( () => console.log(this.nombre + " smash!!"), 1500 )
  }
}
hulkTimeF.smash();

console.log("Practica 7");
//Destructuración
let avenger = {
  nombre : "Steve",
  clave : "Capitan America",
  poder : "Droga"
}
let nombre7 = avenger.nombre;
let clave7 = avenger.clave;
let poder7 = avenger.poder;
console.log( nombre7, clave7, poder7);
//Destructuración
let avenger2 = {
  nombre2_7 : "Steve",
  clave2_7 : "Capitan America",
  poder2_7 : "Droga"
}
let { nombre2_7, clave2_7, poder2_7 } = avenger2;
console.log( nombre7, clave7, poder7);
let { nombre2_7:nombreA7, clave2_7:claveA7, poder2_7:poderA7 } = avenger2;
console.log( nombreA7, claveA7, poderA7);
//Destructuración de arreglos
let avengers:string[] = ["Thor", "Steve", "Tony"];
let [thor, capi, ironman] = avengers;
console.log(thor, capi, ironman);

console.log("Practica 8");
//Promesas
let prom1 = new Promise( function( resolve, reject ) {
  setTimeout( ()=>{
    console.log("Promesa terminada");
    //termina bien
    //resolve();
    //termina mal
    reject();
  }, 1500 )
} )

prom1.then(
  ()=> console.log("Ejecutarme cuando sale bien"),
  ()=>console.log("Ejecutarme cuando sale mal"))

console.log("Practica 9");
//interfaces
interface Xmen {
  nombre:string,
  poder:string
}

let enviarMision = (xmen:Xmen) => {
  console.log("Enviando a: " + xmen.nombre);
}

let enviarCuartel = (xmen:Xmen) => {
  console.log("Enviando al cuartel: " + xmen.nombre);
}

let wolvering9:Xmen= {
  nombre : "Wolvering",
  poder : "Regeneración"
};
enviarMision(wolvering9);
enviarCuartel(wolvering9);

console.log("Practica 10");
//Clases en TypeScript
class Avenger {
  nombre:string = "Antman";
  equipo:string = undefined;
  nombreReal:string = undefined;

  puedePelear:boolean = false;
  peleasGanadas:number = 0;

  constructor(nombre:string, equipo:string, nombreReal:string) {
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal
  }
}

let antman:Avenger = new Avenger("Antman", "cap", "Scott Lang");

console.log(antman);

console.log("Practica 11");
//Modulos

console.log("Practica 12");
//Decoradores
let consola = ( constructor : Function ) => console.log(constructor);
// function consola ( constructor:Function ) {
//   console.log( constructor );
// }

@consola
class Villano {
  constructor( public nombre:string ) {

  }
}

console.log("Practica 13 (Examen)");
// Uso de Let y Const
let nombreExm = "Ricardo Tapia";
let edadExm = 23;
const PERSONAJEXM = {
  nombreExm: nombreExm,
  edadExm: edadExm
};

// Cree una interfaz que sirva para validar el siguiente objeto
interface SuperHero {
  nombre:string,
  artesMarciales: string[]
}

var batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }
let resultadoDoble = ( a:number, b:number ) => (a+b)*2;


// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre, arma = "arco", poder? ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};


// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
  private base:number;
  private altura:number;
  constructor ( base:number, altura:number ) {
    this.base = base;
    this.altura = altura;
  }
  getArea():number {
    return this.base * this.altura;
  }

}
console.log("Practica 11");
console.log("Practica 11");
console.log("Practica 11");
console.log("Practica 11");
console.log("Practica 11");
console.log("Practica 11");
console.log("Practica 11");
console.log("Practica 11");
