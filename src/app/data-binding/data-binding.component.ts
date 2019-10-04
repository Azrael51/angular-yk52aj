import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  nombre:string;
  apellido:string;
  saludo:string;

  constructor() { }
  saludar():void{
  this.saludo="OK";
  }
  ngOnInit() {
  }

}