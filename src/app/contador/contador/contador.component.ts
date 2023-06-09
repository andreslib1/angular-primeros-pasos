import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{ titulo }}</h1>

    <h2>La base es 55</h2>

    <button (click)="acumular(base)"> +5 </button>

    <span> {{numero}} </span>

    <button (click)="acumular(-base)"> -5 </button>


    `
})
export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number = 0; 
    base: number = 5; 
  
  
    acumular(valor: number){
    this.numero += valor;
  }
}