import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})


export class MainPageComponent {


  
    personajes: Personaje[] = [
      {
        nombre: 'goku',
        poder: 300
      },
      {
        nombre: 'vegeta',
        poder: 400
      }
    ]; 

    agregarPersonaje(argumento: Personaje) {
      
      // Se agrega el nuevo personaje al arreglo 'personajes'.
      this.personajes.push(argumento);
    }

    constructor(private dbzService: DbzService){

    }
      
    
}

export { Personaje };

