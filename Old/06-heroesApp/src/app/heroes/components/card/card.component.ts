import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() hero!: Hero;

  ngOnInit(): void {
    if (!this.hero) {
      throw new Error('Hero property is required');
    }
  }
}
