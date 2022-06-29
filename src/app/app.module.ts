import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ComponentsComponent } from './pages/blog/components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
