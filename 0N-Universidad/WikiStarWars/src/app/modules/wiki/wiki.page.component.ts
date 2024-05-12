import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.page.html',
  styleUrls: ['./wiki.page.scss'],
})
export class WikiPage implements OnInit {
  readonly categoriesMock = './assets/data/categories.json';
  public selectedCategory: string = '';

  categories: Category[] = [];
  notFirstTime: boolean = false;

  constructor(private toastController: ToastController) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    fetch(this.categoriesMock)
      .then((res) => res.json())
      .then((json) => {
        this.categories = json;
      });
  }

  categorySelected(category: string) {
    if (this.selectedCategory === category) {
      this.selectedCategory = '';
      return;
    }

    this.selectedCategory = category;
  }

  async presentWelcomeToast() {
    if (this.notFirstTime) {
      return;
    }

    const toast = await this.toastController.create({
      message: 'Welcome to the Star Wars Wiki App!',
      duration: 2000,
      position: 'top',
      animated: true,
    });
    toast.present();
    this.notFirstTime = true;
  }

  ionViewDidEnter() {
    this.presentWelcomeToast();
  }
}
