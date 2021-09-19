import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
mensaje = 'Total: ';
valorA = 0;
valorB = 0;

sumarNumeros(){
  this.mensaje  = 'Total: ' + (this.valorA + this.valorB).toString();
  }

}
