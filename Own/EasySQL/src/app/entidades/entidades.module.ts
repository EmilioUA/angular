import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntidadesRoutingModule } from './entidades.routing';
import { LiteralesPageComponent } from './pages/literales/literales.component';
import { ProcedimientoPageComponent } from './pages/procedimiento/procedimiento.component';
import { SharedModule } from '../shared/shared.module';
import { TablePageComponent } from './pages/tabla/tabla.component';
import { ShowResultadoComponent } from './components/show-resultado/show-resultado.component';

@NgModule({
  declarations: [
    TablePageComponent,
    ProcedimientoPageComponent,
    LiteralesPageComponent,
    ShowResultadoComponent,
  ],
  imports: [CommonModule, EntidadesRoutingModule, SharedModule],
})
export class EntidadesModule {}
