import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WikiPage } from './wiki.page.component';

const routes: Routes = [
  {
    path: '',
    component: WikiPage
  },
  {
    path: 'article/:cat/:id',
    loadChildren: () => import('./article/article.module').then( m => m.ArticlePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WikiPageRoutingModule {}
