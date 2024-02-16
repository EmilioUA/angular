import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  @Output()
  onNewCharacter: EventEmitter<Character>

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void{
    console.log(this.character);
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character)

    this.character = { name: '', power: 0}
  }

  constructor() { 
    this.onNewCharacter = new EventEmitter();
  }

  ngOnInit() {
  }

}
