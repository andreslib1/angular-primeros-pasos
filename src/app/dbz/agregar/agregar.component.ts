import { Component, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../main-page/main-page.component'; // Asegúrate de importar la interfaz 'Personaje' desde el componente correspondiente

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
// Se crea un EventEmitter llamado 'onPersonajeAgregado' con el decorador @Output().
@Output() onPersonajeAgregado = new EventEmitter<Personaje>();

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    } else {
      // Agrega el nuevo personaje al arreglo 'personajes'
      this.onPersonajeAgregado.emit({
        nombre: this.nuevo.nombre,
        poder: this.nuevo.poder
      });
    }
 // Restablece el objeto 'nuevo' a sus valores predeterminados
    this.nuevo = {
      nombre: '',
      poder: 0
    };

    console.log(this.nuevo);
  }
}

