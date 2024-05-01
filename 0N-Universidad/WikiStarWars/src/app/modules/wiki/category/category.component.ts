import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit{
  @Input() theCategory: Category = new Category;
  @Input() selected: boolean = false;
  @Output() clicked = new EventEmitter<string>();
 
  articles: any[] = [];
  constructor(private _wikiService: WikiService) { }

  ngOnInit(): void {
    this.getArticles(this.theCategory.name);
  }

  click(){
    this.clicked.emit(this.theCategory.name);
    console.log("Clicked on " + this.theCategory.name);
  }

  getArticles(category: string) {
    this._wikiService.getAllCategories(category).subscribe(data => {
      this.articles = data.results;
    });
  }

}
