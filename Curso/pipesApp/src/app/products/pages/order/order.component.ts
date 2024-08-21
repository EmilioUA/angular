import { Component } from '@angular/core';
import { Color, Hero } from '../../Interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public text: string = 'Hello, Angular!';
  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.Blue },
    { name: 'Black Panther', canFly: false, color: Color.Black },
    { name: 'Batman', canFly: false, color: Color.Black },
    { name: 'Daredevil', canFly: false, color: Color.Black },
    { name: 'Deadpool', canFly: false, color: Color.Red },
    { name: 'Green lantern', canFly: true, color: Color.Green },
    { name: 'Iron man', canFly: true, color: Color.Red },
  ];
  public sortBy: keyof Hero | ''  = '';

  public toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public changeSortBy(key: keyof Hero): void {
    this.sortBy = key;
  }
}
