import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-gallery-characters',
  templateUrl: './gallery-characters.component.html',
  styleUrls: ['./gallery-characters.component.scss']
})
export class GalleryCharactersComponent implements OnInit {
  @Input() characters: any;

  numbers = Array(1).fill(0);
  options = { autoHide: false, scrollbarMinSize: 100 };

  imgDefault: any = '../../../../assets/images/default.jpg'

  constructor () {}

  ngOnInit (): void {}
}
