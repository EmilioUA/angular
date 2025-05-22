import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

const resetValue = {
  name: '',
  price: 0,
  inStorage: 0,
};

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent implements OnInit {
  public myFormBasic: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    stock: new FormControl(0),
  });

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, Validators.min(0)],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset(resetValue);
  }

  isValidField(field: string) {
    const fieldControl = this.myForm.controls[field];

    return fieldControl?.touched && fieldControl?.errors;
  }

  getFieldErrorMessage(field: string): string | null {
    const fieldControl = this.myForm.controls[field];

    if (!fieldControl) {
      return null;
    }

    const errors = fieldControl.errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `El campo debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `El valor mínimo es ${errors['min'].min}`;
        default:
          return `Error en el campo ${field}`;
      }
    }

    return '';
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    // Reset form
    this.myForm.reset(resetValue);
  }
}
