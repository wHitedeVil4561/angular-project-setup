import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ErrorDirective } from './directives/error.directive';
import { ErrorPipe } from './pipes/error.pipe';



@NgModule({
  declarations: [
    FormFieldComponent,
    ErrorDirective,
    ErrorPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
