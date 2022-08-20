import { ChronologyComponent } from './../chronology/chronology.component';
import { HousesService } from './../../shared/services/houses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses-page',
  templateUrl: './houses-page.component.html',
  styleUrls: ['./houses-page.component.scss']
})
export class HousesPageComponent implements OnInit {

  houses = [];

  constructor(private housesService: HousesService) { }

  ngOnInit(): void {
    this.housesService.getHouses().subscribe((res: any) => {

      this.houses = res;

    });
  }
  
}
