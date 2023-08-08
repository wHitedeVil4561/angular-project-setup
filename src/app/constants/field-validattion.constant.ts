import { Validators } from '@angular/forms';
import { VALIDATION_CONSTANT } from './validation.constant';
import { REGEX_CONSTANT } from './regex.contant';

export const FIELD_VALIDATION = {
  NAME: [
    Validators.required,
    Validators.minLength(VALIDATION_CONSTANT.NAME.minlength),
    Validators.maxLength(VALIDATION_CONSTANT.NAME.maxlength),
  ],
  EMAIL: [Validators.required, Validators.pattern(REGEX_CONSTANT.email)],
  PHONE: [
    Validators.required,
    Validators.minLength(VALIDATION_CONSTANT.PHONE.minlegth),
    Validators.maxLength(VALIDATION_CONSTANT.PHONE.maxlength),
    Validators.pattern(REGEX_CONSTANT.phone),
  ],
  PASSWORD: [
    Validators.required,
    Validators.minLength(VALIDATION_CONSTANT.PASSWORD.minlegth),
    Validators.maxLength(VALIDATION_CONSTANT.PASSWORD.maxlength),
    Validators.pattern(REGEX_CONSTANT.password),
  ],
};
