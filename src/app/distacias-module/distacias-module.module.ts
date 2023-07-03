import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DistanciaComponent } from '../distancia/distancia.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [DistanciaComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule
  ],
  exports:[
    DistanciaComponent
  ]
})
export class DistaciasModuleModule { }
