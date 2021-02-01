import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
