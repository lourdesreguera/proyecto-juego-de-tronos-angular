import { CharacterDetailService } from './../../shared/services/character-detail.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent implements OnInit {
  character: any = [];
  numbers = Array(1).fill(0);
  options = { autoHide: false, scrollbarMinSize: 100 };

  constructor (
    private route: ActivatedRoute,
    private characterDetailService: CharacterDetailService,
  ) {}

  ngOnInit (): void {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name')
      this.characterDetailService
        .getCharacterDetail(name)
        .subscribe(character => {
          this.character = character
        })
    })
  }
}
