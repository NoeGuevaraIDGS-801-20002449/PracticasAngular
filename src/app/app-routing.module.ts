import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistanciaComponent } from './distancia/distancia.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { PizzaComponent } from './pizza/pizza.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
  { path: 'distancia', component: DistanciaComponent },
  { path: 'resistencias', component: ResistenciasComponent },
  { path: 'pizza', component: PizzaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
