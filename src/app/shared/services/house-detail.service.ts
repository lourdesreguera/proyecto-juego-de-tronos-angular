import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseDetailService {
  houseName : any
  constructor(private http: HttpClient) { }

  getHouseDetail(houseName : any) {
    return this.http.get(`https://api.got.show/api/show/houses/${houseName}`)
}

}
