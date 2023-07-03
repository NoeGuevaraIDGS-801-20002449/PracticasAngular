import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  colores: string[] = ['Negro', 'Cafe', 'Rojo', 'Anaranjado', 'Amarillo', 'Verde', 'Azul', 'Morado', 'Gris', 'Blanco'];
  toleranciaL: string[] = ['Dorado', 'Plata','Rojo'];
  banda1!: string;
  banda2!: string;
  banda3!: string;
  tolerancia!: string;
  valorR!: number;
  valorMax!: number;
  valorMin!: number;

  calcularResistencia(): void {
    const banda1V = this.colores.indexOf(this.banda1);
    const banda2V = this.colores.indexOf(this.banda2);
    const banda3V = this.colores.indexOf(this.banda3);
    const mult = Math.pow(10, banda3V);
    this.valorR = (banda1V * 10 + banda2V) * mult;

    if (this.tolerancia === 'Dorado') {
      this.valorMax = this.valorR * 1.05;
      this.valorMin = this.valorR * 0.95;
    } else if (this.tolerancia === 'Plata') {
      this.valorMax = this.valorR * 1.1;
      this.valorMin = this.valorR * 0.9;
    } else if(this.tolerancia === 'Rojo'){
      this.valorMax = this.valorR * 1.02;
      this.valorMin = this.valorR * 0.98;
    }
  }

  colorToHex(color: string): string {
    switch (color) {
      case 'Negro':
        return '#000000';
      case 'Cafe':
        return '#8B4513';
      case 'Rojo':
        return '#FF0000';
      case 'Anaranjado':
        return '#FFA500';
      case 'Amarillo':
        return '#FFFF00';
      case 'Verde':
        return '#008000';
      case 'Azul':
        return '#0000FF';
      case 'Morado':
        return '#800080';
      case 'Gris':
        return '#808080';
      case 'Blanco':
        return '#FFFFFF';
      case 'Dorado':
        return '#FFBF00';
      case 'Plata':
        return '#808080';
      default:
        return '';
    }
  }
}
