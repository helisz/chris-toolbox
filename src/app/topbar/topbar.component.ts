import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../service/navigation.service';

@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
	navigation: any;
	constructor(private nav: NavigationService) {
		this.navigation = nav.getNavigation();
	}

	ngOnInit() {}
}
