import { Component, OnInit } from '@angular/core';
import { FireEmblemService } from 'src/app/service/fireemblem.service';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
interface Character {
	id: number;
	name: string;
	img: string;
}

@Component({
	selector: 'app-fire-emblem',
	templateUrl: './fire-emblem.component.html',
	styleUrls: ['./fire-emblem.component.scss']
})
export class FireEmblemComponent implements OnInit {
	data: any;
	profileList: Array<Character> = [];
	detail: object;

	constructor(private fire: FireEmblemService) {
		this.data = fire.getData();
	}

	ngOnInit() {
		let cid = 1;
		for (let item of this.data) {
			const c = {
				id: item.id,
				name: item.name,
				img: item.img
			};
			this.profileList.push(c);
		}
	}
	setDetail(id) {
		for (let profile of this.data) {
			if (profile.id == id) {
				this.detail = profile;
			}
		}
	}
}
