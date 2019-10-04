import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SaludoService } from './servicios/saludo.service';
import { SaludoComponent } from './saludo/saludo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalcualadoraComponent } from './calcualadora/calcualadora.component';
import { CalculosService } from './servicios/calculos.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SaludoComponent,DataBindingComponent, CalcualadoraComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SaludoService, CalculosService]
})
export class AppModule { }
