import { Pipe, PipeTransform } from '@angular/core';
import { ErrorDirective } from '../directives/error.directive';
import { getErrorValidationMessage } from '../helper';

@Pipe({
  name: 'error',
})
export class ErrorPipe implements PipeTransform {
  transform(
    errorObj: any,
    errorDirective: ErrorDirective,
    touched: boolean
  ): string {
    const errors = Object.entries(errorObj ?? {});
    if (!errors.length || !touched) return '';
    const controlName =
      errorDirective.controlName ?? errorDirective.formControlName;
    return getErrorValidationMessage(controlName, errors);
  }
}
