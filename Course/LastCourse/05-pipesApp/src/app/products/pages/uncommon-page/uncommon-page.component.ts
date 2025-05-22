import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Emilio';
  public gender: 'male' | 'female' | 'they' = 'male';
  public inviteMap = {
    male: 'invitarlo',
    female: 'invitarla',
    they: 'invitarle',
  };

  changeClient(): void {
    this.name = 'Maria';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = [
    'Emilio',
    'Pedro',
    'Luis',
    'Carlos',
    'Sofia',
    'Elena',
  ];
  public clientsMap = {
    '=0': 'no hay ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: ' tenemos # clientes esperando.',
  };

  dropClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Emilio',
    age: 30,
    address: 'Calle 123',
  };

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(1500).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos algo en la promesa');
      console.log('Promesa emitida');
    }, 2500);
  });

  //JSON Pipe
  public product = {
    name: 'Laptop',
    price: 1500,
    stock: 5,
  };
}
