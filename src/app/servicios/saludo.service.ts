import { Injectable } from '@angular/core';
import {Persona} from '../modelo/persona'

@Injectable()
export class SaludoService {
persona:Persona;
saludar():string{
  return "hola"+this.persona.getNombre+" "+this.persona.getApellido;
}
  constructor() { 
    this.persona=new Persona("Renan","Arias");
  }

}