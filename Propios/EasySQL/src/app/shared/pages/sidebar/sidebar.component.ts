import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {
  navItems = [
    { text: 'Tabla', link: 'entidades/tabla' },
    { text: 'Procedimiento', link: 'entidades/procedimiento' },
    { text: 'Literales', link: 'entidades/literales' },
  ];
}
