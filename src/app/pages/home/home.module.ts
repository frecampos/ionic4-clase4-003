import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// importar el uso de formulario reactivo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule // incluir como modulo de importacion al TypeScript
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
