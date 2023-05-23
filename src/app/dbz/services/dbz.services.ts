import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    
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
    constructor(){
        console.log('Servicio Inicializado')
    }
}