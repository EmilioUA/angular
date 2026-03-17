import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-add-character',
  imports: [],
  templateUrl: './add-character.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacter {
  name = signal('');
  power = signal(0);
  characters = input.required<Character[]>();
  newCharater = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.newCharater.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
