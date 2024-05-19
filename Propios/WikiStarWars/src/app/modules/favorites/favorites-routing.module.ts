import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesPage } from './favorites.page.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesPageRoutingModule {}
