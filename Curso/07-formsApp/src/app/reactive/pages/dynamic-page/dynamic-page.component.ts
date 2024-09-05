import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``,
})
export class DynamicPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear Solid', Validators.required],
      ['The Legend of Zelda', Validators.required],
    ]),
  });

  get favoriteGamesArray() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  public newFavoriteGame = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) {}

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.controls['favoriteGames'] = this.fb.array([]);
    this.myForm.reset();
  }

  onDeleteFavorite(i: number) {
    this.favoriteGamesArray.removeAt(i);
  }

  onAddFavoriteGame() {
    if (this.newFavoriteGame.invalid) {
      return;
    }

    const newGame = this.newFavoriteGame.value;
    this.favoriteGamesArray.push(this.fb.control(newGame, Validators.required));

    this.newFavoriteGame.reset();
  }

  isValidField(field: string) {
    const fieldControl = this.myForm.controls[field];

    return fieldControl?.touched && fieldControl?.errors;
  }

  isValidFieldinArray(formArray: FormArray, i: number) {
    const fieldControl = formArray.controls[i];

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
}
