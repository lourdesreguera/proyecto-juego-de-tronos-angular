import { HouseDetailPageComponent } from './pages/house-detail-page/house-detail-page.component';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { ChronologyComponent } from './pages/chronology/chronology.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"characters", component: CharactersPageComponent},
  {path: "characters/:name", component: CharacterDetailPageComponent },
  {path:"houses", component: HousesPageComponent},
  {path:"chronology", component: ChronologyComponent},
  {path:"houses/:name", component: HouseDetailPageComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
