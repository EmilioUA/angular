import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProcedimientoPageComponent } from './pages/procedimiento/procedimiento.component';
import { TablePageComponent } from './pages/tabla/tabla.component';
import { LiteralesPageComponent } from './pages/literales/literales.component';

const routes: Routes = [
  {
    path: 'procedimiento',
    component: ProcedimientoPageComponent,
  },
  {
    path: 'tabla',
    component: TablePageComponent,
  },
  {
    path: 'literales',
    component: LiteralesPageComponent,
  },
  {
    path: '**',
    redirectTo: 'tabla',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntidadesRoutingModule {}
