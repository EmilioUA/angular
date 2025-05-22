import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExitPageRoutingModule } from './exit-routing.module';

import { ExitPage } from './exit.page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExitPageRoutingModule
  ],
  declarations: [ExitPage]
})
export class ExitPageModule {}
