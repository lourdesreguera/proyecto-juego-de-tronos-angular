import { CharactersService } from './../../shared/services/characters.service'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {
  characters : any = []
  @Input() filterChar : any

  constructor (private charactersService: CharactersService) {}

  ngOnInit (): void {
    this.charactersService.getCharacters().subscribe((charactersData: any) => {
      this.characters = charactersData
    })
  }

  viewFilter(ev : any){
    this.filterChar = ev
    console.log(this.filterChar)
  }
}
