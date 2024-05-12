import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WikiService } from '../../../services/wiki.service';
import { People } from 'src/app/models/people';
import { Planet } from 'src/app/models/planet';
import { Species } from 'src/app/models/species';
import { Starship } from 'src/app/models/starship';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  category: string = '';
  id: string = '';
  title: string = '';
  people: People = new People();
  planet: Planet = new Planet();
  species: Species = new Species();
  starship: Starship = new Starship();

  constructor(
    private route: ActivatedRoute,
    private _wikiService: WikiService
  ) {}

  ngOnInit() {
    this.LoadCategoryData();
  }
  LoadCategoryData() {
    this.category = this.route.snapshot.paramMap.get('cat') ?? '';
    this.id = this.route.snapshot.paramMap.get('id') ?? '';

    this._wikiService
      .getArticle(this.category, this.id)
      .subscribe((result: any) => {
        switch (this.category) {
          case 'People':
            this.people = result.result.properties;
            this.title = this.people.name;
            break;
          case 'Planets':
            this.planet = result.result.properties;
            this.title = this.planet.name;
            break;
          case 'Species':
            this.species = result.result.properties;
            this.title = this.species.name;
            break;
          case 'Starships':
            this.starship = result.result.properties;
            this.title = this.starship.name;
            break;
        }
      });
  }
}
