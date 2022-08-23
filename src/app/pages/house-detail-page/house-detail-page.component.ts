import { HouseDetailService} from './../../shared/services/house-detail.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-detail-page',
  templateUrl: './house-detail-page.component.html',
  styleUrls: ['./house-detail-page.component.scss']
})
export class HouseDetailPageComponent implements OnInit {
    house: any = [];

  constructor(
    private route: ActivatedRoute,
    private houseDetailService: HouseDetailService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name')
      this.houseDetailService
        .getHouseDetail(name)
        .subscribe(house => {
          this.house = house
        })
    })

  }

}
