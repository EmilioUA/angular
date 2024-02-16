import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  onDelete: EventEmitter<string>


  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id)
  }

  constructor() { 
    this.onDelete = new EventEmitter();
  }

  ngOnInit() {
  }

}
