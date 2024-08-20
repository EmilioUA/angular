import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'emilio';
  public nameUpper: string  = 'EMILIO';
  public nameTitle: string  = 'eMIliO pRiEtO';

  public currentDate: Date = new Date(); // current date
}
