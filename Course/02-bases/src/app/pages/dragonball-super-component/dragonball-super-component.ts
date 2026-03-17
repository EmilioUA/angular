import { Component, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import type { Character } from '../../interfaces/character.interface';
import { AddCharacter } from '../../components/dragonball/add-character/add-character';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-component',
  templateUrl: './dragonball-super-component.html',
  imports: [CharacterList, AddCharacter],
})
export class DragonballSuperComponent {
  public dragonballService = inject(DragonballService);
}
