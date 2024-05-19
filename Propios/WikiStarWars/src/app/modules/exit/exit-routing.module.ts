import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExitPage } from './exit.page.component';

const routes: Routes = [
  {
    path: '',
    component: ExitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExitPageRoutingModule {}
