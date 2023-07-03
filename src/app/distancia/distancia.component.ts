import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  x1!:string;
  x2!:string;
  y1!:string;
  y2!:string;
  resultado!:number;

  calcular(){
    this.resultado=Math.sqrt((Math.pow((parseInt(this.x2)-parseInt(this.x1)),2))+(Math.pow((parseInt(this.y2)-parseInt(this.y1)),2)))
  }

}
