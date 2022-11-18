import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CatItemComponent } from './components/cat-item/cat-item.component';
import { MainComponentComponent } from './components/main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CatItemComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
