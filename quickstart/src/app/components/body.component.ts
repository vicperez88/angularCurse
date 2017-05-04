import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html',
})
export class BodyComponent {
  mostrar:boolean = false;

  texto:string = "Un gran poder";
  author:string = "Ben Parker";

  personajes:string[] = ["Spiderman", "Venon", "Dr. Octopus"];
}
