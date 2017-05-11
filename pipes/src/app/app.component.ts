import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private nombre = 'Víctor';
  private arreglo = [1,2,3,4,5,6,7,8,9,10];
  private PI = Math.PI;
  private percent = .2137;
  private money = 18879.09;
  private active = true;

  private heroe = {
    nombre: "Logan",
    clave: 'Wolvering',
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: 29
    }
  }

  private valorDePromesa = new Promise ( ( resolve, reject ) => {
    setTimeout( ()=>resolve('Llego la info'), 3500 );
  })

  private fecha = new Date();

  private nombreCompleto = 'Víctor Adrián Pérez Contreras';
  private video = "I1lK8D2eXP4";
  title = 'app works!';
}
