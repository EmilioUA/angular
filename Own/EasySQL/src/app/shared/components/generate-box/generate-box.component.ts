import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Column {
  name: string;
  type: string;
  description: string;
}

@Component({
  selector: 'shared-generate-box',
  templateUrl: './generate-box.component.html',
  styleUrl: './generate-box.component.css',
})
export class GenerateBoxComponent {
  @Input()
  public entidad: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  tableName: string = '';
  description: string = '';
  columns: Column[] = [];

  addColumn() {
    this.columns.push({ name: '', type: '', description: '' });
  }

  removeColumn(index: number) {
    this.columns.splice(index, 1);
  }

  generateSearch() {
    let SQLStringContent = this.tableName + ',' + this.description + ',';

    this.columns.forEach((column, index) => {
      SQLStringContent += `${column.name},${column.type},${column.description || ''}`;

      if (index < this.columns.length - 1) {
        SQLStringContent += ',';
      }
    });

    this.onValue.emit(SQLStringContent);
  }
}
