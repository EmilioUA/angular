import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Contador: {{ counter }}</h3>

    <button (click)="updateCounter(+1)">+1</button>
    <button (click)="updateCounter(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button> `,
})
export class CounterComponent implements OnInit {
  public counter: number;

  updateCounter(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 0;
  }

  constructor() {
    this.counter = 0;
  }

  ngOnInit() {}
}
