import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter = 0;
  counterSignal = signal(10); //New signals

  constructor() {
    setInterval(() => {
      //this.counter += 1;
      this.counterSignal.update((v) => v + 1); //Updated zoneless
      console.log('Tick');
    }, 3000);
  }

  increaseBy(value: number) {
    this.counter += value;
    //this.counterSignal.set(this.counterSignal() + value)
    this.counterSignal.update((current) => (current += value));
  }

  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update((current) => (current -= value));
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
