import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'entidades',
    loadChildren: () => import('./entidades/entidades.module').then(m => m.EntidadesModule),
  },
  {
    path: '**',
    redirectTo: 'entidades',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
