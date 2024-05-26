import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroe.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CounterModule, HeroesModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
