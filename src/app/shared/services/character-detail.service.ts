import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailService {
  characterName : any = ''


  constructor(private http: HttpClient) { }

  getCharacterDetail() {
    console.log(this.characterName)
    return this.http.get(`https://api.got.show/api/show/characters/${this.characterName}`)
  }
}
