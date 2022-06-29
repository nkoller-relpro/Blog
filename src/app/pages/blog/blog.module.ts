import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { HeaderComponent } from './components/header/header.component';

NgModule({
    declarations: [
      HeaderComponent,
      BlogComponent,
    ],
    imports: [
      // SharedModule
    ],
    exports: [
      HeaderComponent,
      BlogComponent,
    ]
  })