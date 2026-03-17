import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-component',
  imports: [NgClass],
  templateUrl: './dragonball-component.html',
})
export class DragonballComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Picolo', power: 3000 },
    { id: 4, name: 'Yamcha', power: 500 },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
      'text-primary': true,
    };
  });

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    console.log(newCharacter);
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields()
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
