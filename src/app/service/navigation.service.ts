import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  getNavigation(){
    return [
      {
        name: 'Landing',
        link: '/',
        icon: 'align-left',
        type: 'main'
      },
      {
        name: 'Rate List Formatter',
        link: 'rate',
        icon: 'setting',
        type: 'feature'
      },
      {
        name: 'Comnet PrdGen',
        link: 'comnet-prd',
        icon: 'setting',
        type: 'feature'
      },
      {
        name: '繁简转换',
        link: 'cnconverter',
        icon: 'setting',
        type: 'feature'
      },
      {
        name: 'Demo I',
        link: 'demo1',
        icon: 'book',
        type: 'demo'
      }
    ];
  }
}
