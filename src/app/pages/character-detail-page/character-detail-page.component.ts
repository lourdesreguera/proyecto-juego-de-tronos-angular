import { CharacterDetailService } from './../../shared/services/character-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent implements OnInit {

  character = []
  constructor(private characterDetailService: CharacterDetailService) { }

  ngOnInit(): void {
    this.characterDetailService.getCharacterDetail().subscribe((characterData: any) => {
      console.log(characterData)
      this.character = characterData
    })
  }

}
