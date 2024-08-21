import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from "../shared/shared.module";
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

import { CanFlyPipe } from './Pipes/can-fly.pipe';
import { SortByPipe } from './Pipes/sort-by.pipe';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    CanFlyPipe,
    SortByPipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
    SharedModule,
]
})
export class ProductsModule { }
