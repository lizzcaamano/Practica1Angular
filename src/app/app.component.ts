import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Siempre poner el tipo de dato
  public title:string = 'Componente principal'; //Variables = propiedades
  //DataBindig = Forma en la que podemos colocar informacion en el componente
  //Forma 1 de hacer DataBindig -> INTERPOLACIÓN -> Doble mostacho en el component HTML

  //Otros componente
  //Trabajar con datos privados
  private dato:string = 'Lorem asmnsjkncjksncjskd'
  //Para interpolar debe accederse a traves de un método
  public getDato():string{
    return this.dato
  }

}
