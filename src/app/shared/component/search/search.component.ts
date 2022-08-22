import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() characters: any[] = []
  @Input() newChar: any[] = []

  constructor () {}

  ngOnInit (): void {}

  changeInput (ev: any) {
    this.newChar = []
    const gallery : any = document.querySelector('#gallery-characters');
    gallery.innerHTML = ''

    const filterChar: any[] = this.characters.filter(char => {
      return char.name.toLowerCase().includes(ev.target.value.toLowerCase())
    })

    this.newChar = filterChar
  }
}
