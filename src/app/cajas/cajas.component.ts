import { Component } from '@angular/core';

@Component({
  selector: 'app-cajas',
  templateUrl: './cajas.component.html',
  styleUrls: ['./cajas.component.css']
})
export class CajasComponent {
  numCajas!: number;
  cajas!: number[];

  cajasG() {
    this.cajas = [];
    for (let i = 1; i <= this.numCajas; i++) {
      this.cajas.push(i);
    }
  }
}
