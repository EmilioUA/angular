import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SidebarComponent } from './pages/sidebar/sidebar.component';

import { GenerateBoxComponent } from './components/generate-box/generate-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, GenerateBoxComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [LoadingSpinnerComponent, GenerateBoxComponent, SidebarComponent],
})
export class SharedModule {}
