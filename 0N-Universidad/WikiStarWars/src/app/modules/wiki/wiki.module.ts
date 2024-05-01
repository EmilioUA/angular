import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { CategoryComponent } from './category/category.component';
import { WikiPage } from './wiki.component';
import { WikiPageRoutingModule } from './wiki-routing.module';
import { WikiService } from './wiki.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    WikiPageRoutingModule,
  ],
  declarations: [CategoryComponent, WikiPage],
  providers: [WikiService],
})
export class WikiPageModule {}
