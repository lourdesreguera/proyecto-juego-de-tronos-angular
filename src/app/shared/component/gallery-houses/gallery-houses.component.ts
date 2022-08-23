import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-houses',
  templateUrl: './gallery-houses.component.html',
  styleUrls: ['./gallery-houses.component.scss']
})
export class GalleryHousesComponent implements OnInit {

  @Input() houses: any;

  imgDefault = '../../../../assets/images/scudo.webp'

  constructor() { }

  ngOnInit(): void {
  }

}
