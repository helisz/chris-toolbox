import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class NavigationService {
	constructor() {}

	getNavigation() {
		return [
			{
				name: 'Landing',
				link: '/',
				icon: 'align-left',
				type: 'main'
			},
			{
				name: 'Demo I',
				link: 'demo1',
				icon: 'book',
				type: 'demo'
			},

			{
				name: 'Fire Emblem',
				link: 'fire-emblem',
				icon: 'book',
				type: 'feature'
			}
		];
	}
}
