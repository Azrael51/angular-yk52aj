import { Injectable } from '@angular/core';

@Injectable()
export class CalculosService {


  constructor() { }

   sumar(n1:number,n2:number):number{
  return Number(n1+n2);
  }
  restar(n1:number,n2:number):number{
  return Number(n1-n2);
  }
   multiplicar(n1:number,n2:number):number{
  return Number(n1*n2);
  }

}