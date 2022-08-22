import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { ChronologyComponent } from './pages/chronology/chronology.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/component/footer/footer.component';

import { GalleryHousesComponent } from './shared/component/gallery-houses/gallery-houses.component';
<<<<<<< HEAD

=======
import { GalleryCharactersComponent } from './shared/component/gallery-characters/gallery-characters.component';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { SearchComponent } from './shared/component/search/search.component';
>>>>>>> 5f10b8ca5ce1a214d35b33107643b56302a4fb90


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    HousesPageComponent,
    ChronologyComponent,
    FooterComponent,

    GalleryHousesComponent

    GalleryCharactersComponent,
    CharacterDetailPageComponent,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
