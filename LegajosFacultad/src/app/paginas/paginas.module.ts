import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegajosComponent } from './pages/legajos/legajos.component';
import { ParcialComponent } from './pages/parcial/parcial.component';
import { RespuestasComponent } from './pages/respuestas/respuestas.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [LegajosComponent, ParcialComponent, RespuestasComponent],
  exports: [LegajosComponent, ParcialComponent, RespuestasComponent],
  imports: [CommonModule, PrimeNgModule],
})
export class PaginasModule {}
