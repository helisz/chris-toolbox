import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  navigation: any;

  constructor(
    public navService: NavigationService
  ) {
    this.navigation = navService.getNavigation();
  }

  ngOnInit() {
  }

}
