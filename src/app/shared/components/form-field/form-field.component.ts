import { Component } from '@angular/core';
import { ErrorDirective } from '../../directives/error.directive';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  constructor(public errorDirective: ErrorDirective) {}
}
