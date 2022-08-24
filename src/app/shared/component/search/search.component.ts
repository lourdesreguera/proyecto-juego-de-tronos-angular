import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
// export class SearchComponent implements OnInit {
//   @Input() characters: any[] = []
//   @Input() newChar: any[] = []

//   constructor () {}

//   ngOnInit (): void {}

//   changeInput (ev: any) {
//     this.newChar = []

//     const gallery : any = document.querySelector('#gallery-characters');
//     gallery.innerHTML = ''

//     const filterChar: any[] = this.characters.filter(char => {
//       return char.name.toLowerCase().includes(ev.target.value.toLowerCase())
//     })

//     this.newChar = filterChar
//   }
// }

export class SearchComponent implements OnInit {
  @Input() characters: any[] = [];
  text: string = '';
  filterChar : any[] = [];
  @Output() filteredChar = new EventEmitter()

  constructor () {}

  ngOnInit (): void {}

  findChar (characters : any) {
    this.text = characters;
    this.filterChar = this.characters.filter(character => character.name.toLowerCase().includes(characters.toLowerCase()));
    this.filteredChar.emit(this.filterChar)
    console.log(this.filteredChar)
  }

}
