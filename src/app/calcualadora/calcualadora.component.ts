import { Component, OnInit } from '@angular/core';
import{CalculosService} from '../servicios/calculos.service';
@Component({
  selector: 'app-calcualadora',
  templateUrl: './calcualadora.component.html',
  styleUrls: ['./calcualadora.component.css'],
  providers:[CalculosService]
})
export class CalcualadoraComponent implements OnInit {
resultado:number;
n1:number;
n2:number;
  constructor(private calculadora:CalculosService) {
   this.resultado=0;

    }

ngOnInit() {
  }
  sumar():void{
    this.resultado=this.calculadora.sumar(this.n1,this.n2)
  }
   restarr():void{
    this.resultado=this.calculadora.restar(this.n1,this.n2)
  }
   multiplicar():void{
    this.resultado=this.calculadora.multiplicar(this.n1,this.n2)
  }


}