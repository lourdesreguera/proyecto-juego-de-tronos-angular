import { HouseDetailService } from './../../shared/services/house-detail.service'
import { CharacterDetailService } from './../../shared/services/character-detail.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent implements OnInit {
  character: any = []
  options = { autoHide: false, scrollbarMinSize: 50 }
  house: any

  constructor (
    private route: ActivatedRoute,
    private characterDetailService: CharacterDetailService,
    private houseDetailService: HouseDetailService
  ) {}

  ngOnInit (): void {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name')
      this.characterDetailService
        .getCharacterDetail(name)
        .subscribe(character => {
          this.character = character

          this.houseDetailService
            .getHouseDetail(this.character.house)
            .subscribe(res => {
              this.house = res
            })
        })
    })
  }
}
