import { Component } from '@angular/core';
import{ServicioService} from './servicios/servicio.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers:[ServicioService]
})
export class AppComponent  {
  name = 'Angular';
  resultado:number;
  

  constructor (private miServicio:ServicioService){
  this.resultado=this.miServicio.realizarOperacion();
  

}
}

