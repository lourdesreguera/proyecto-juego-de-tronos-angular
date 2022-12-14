import { CharactersService } from './../../shared/services/characters.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss']
})
export class ChronologyComponent implements OnInit {
  characters: any
  options = { autoHide: false, scrollbarMinSize: 100 };
  crono = true;


  constructor (private charactersService: CharactersService) {}

  ngOnInit (): void {
    this.charactersService.getCharacters().subscribe((res: any) => {
      const firstFilter = res.filter((el: any) => el.age != null)
      const secondFilter = firstFilter.filter((el: any) => el.age.age != null)

      this.characters = secondFilter.sort((a: any, b: any) => {
        if (a.age.age > b.age.age) {
          return 1
        }
        if (a.age.age < b.age.age) {
          return -1
        }
        return 0
      })
    })
  }

  reverseAge () {
    const button : any = document.querySelector('.chronology__button');
    this.crono = !this.crono;

    if(this.crono) {
      button.innerHTML = '0'
    } else {
      button.innerHTML = '100'
    }
    this.characters.reverse();
  }
}

