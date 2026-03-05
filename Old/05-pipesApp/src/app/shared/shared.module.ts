import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';

@NgModule({
  declarations: [MenuComponent, ToggleCasePipe],
  imports: [CommonModule, PrimeNgModule],
  exports: [MenuComponent, ToggleCasePipe],
})
export class SharedModule {}
