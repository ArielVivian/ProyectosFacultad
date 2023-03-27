import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Legajos',
        routerLink: '/',
      },
      {
        label: 'Parcial 1',
        routerLink: 'parcial',
      },
      {
        label: 'Respuestas',
        routerLink: 'respuestas',
      },
    ];
  }
}
