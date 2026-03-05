import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);
  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  });
  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  });

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name = signal('Ironman');
    this.age = signal(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
