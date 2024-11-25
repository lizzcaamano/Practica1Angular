import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: false,
  
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  //1. declaracion de propiedades

  //Que la propiedad se quede vacia
  private courses!:string[];
  //union de tipos en TypeScript
  private response!:string|number;
  public dir:string="Uniempresarial";

  //2. Método constructor
  constructor(){
    this.courses=['JAVA', 'PHP','PYTHON','C++', 'LARAVEL'];
    this.response=""
  }

  //Métodos orden y get and set (acceso)
  public getCourses():string[]{
    return this.courses;
  }

  public getResponse():string|number{
    return this.response;
  }

  
  //Encapsulación de métodos
  public getRegisterCoursePerson(names:string, lastnames:string, addres:string, age:string, course:string):void{
    this.registerCoursePerson(names, lastnames, addres, age, course)
  }

  private registerCoursePerson(names:string, lastnames:string, addres:string, age:string, course:string):string{
  return this.response= `Se ha inscrito en el curos: ${course} \n la persona: ${names} ${lastnames} de edad:${age}, dirección: ${addres}` ;
  }


}
