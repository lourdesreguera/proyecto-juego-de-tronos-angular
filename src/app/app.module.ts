import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { ChronologyComponent } from './pages/chronology/chronology.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/component/footer/footer.component';
import { GalleryHousesComponent } from './shared/component/gallery-houses/gallery-houses.component';
import { GalleryCharactersComponent } from './shared/component/gallery-characters/gallery-characters.component';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { HouseDetailPageComponent } from './pages/house-detail-page/house-detail-page.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { FormsModule } from '@angular/forms';
import { FilterHousesPipe } from './shared/pipes/filter-houses.pipe';
import { FilterCharactersPipe } from './shared/pipes/filter-characters.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslationComponent } from './shared/component/translation/translation.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    HousesPageComponent,
    ChronologyComponent,
    FooterComponent,
    GalleryHousesComponent,
    GalleryCharactersComponent,
    CharacterDetailPageComponent,
    HouseDetailPageComponent,
    FilterHousesPipe,
    HouseDetailPageComponent,
    FilterCharactersPipe,
    TranslationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SimplebarAngularModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: (http:HttpClient) => {
          return new TranslateHttpLoader(http)
        },
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
