import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SuccessComponent } from 'src/app/shared/success/success.component';
import { WarningComponent } from 'src/app/shared/warning/warning.component';

@NgModule({
  declarations: [
    HomeComponent,
    SuccessComponent,
    WarningComponent
  ],
  imports: [
  ],

})
export class HomeModule { }
