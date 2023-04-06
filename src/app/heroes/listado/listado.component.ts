import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  heroes: string[] = ['Spiderman','ironman', 'thor'];
  heroe_delete: string = '';
  validador = false; 

  borrarHeroe(){

    let heroe_del = this.heroes.shift();

    if(heroe_del){

      this.heroe_delete = heroe_del;

      this.validador = true

    }
    
    
    return this.heroe_delete;
    
    
  }

  
}





