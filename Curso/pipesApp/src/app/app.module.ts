import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//Configuración del locale de la app
import localeES from '@angular/common/locales/es';
import localeFR from '@angular/common/locales/fr-BE';
import localeNL from '@angular/common/locales/nl-BE';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeES);
registerLocaleData(localeFR);
registerLocaleData(localeNL);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
