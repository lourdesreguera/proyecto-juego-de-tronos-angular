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



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    HousesPageComponent,
    ChronologyComponent,
    FooterComponent,
    GalleryHousesComponent
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
