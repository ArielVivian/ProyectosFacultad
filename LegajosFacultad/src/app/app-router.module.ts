import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegajosComponent } from './paginas/pages/legajos/legajos.component';
import { ParcialComponent } from './paginas/pages/parcial/parcial.component';
import { RespuestasComponent } from './paginas/pages/respuestas/respuestas.component';

const routes: Routes = [
  {
    path: '',
    component: LegajosComponent,
    pathMatch: 'full',
  },
  {
    path: 'parcial',
    component: ParcialComponent,
  },
  {
    path: 'respuestas',
    component: RespuestasComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
