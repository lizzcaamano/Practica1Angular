import { Component } from '@angular/core';

@Component({
  selector: 'app-pj1footer',
  standalone: false,
  
  templateUrl: './pj1footer.component.html',
  styleUrl: './pj1footer.component.css'
})
export class Pj1footerComponent {
  //Forma 2 de Data bindig -> por PROPIEDAD (de la etiqueta)
  private policies:string ="Todos los derechos reservados"
  public anio:string=" <strong>2024 <i>Cursos online LD</i></strong> "

  public getPolicies():string{
    return this.policies
  }
}
