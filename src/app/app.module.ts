import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MaterialModule} from "./modules/material/material.module";
import { FilmsViewComponent } from './components/films-view/films-view.component';
import {HttpClientModule} from "@angular/common/http";
import { FilmsCardComponent } from './components/films-card/films-card.component';
import { ButtonFavoriteComponent } from './components/button-favorite/button-favorite.component';
import { PopupFilmComponent } from './components/popup-film/popup-film.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    FilmsViewComponent,
    FilmsCardComponent,
    ButtonFavoriteComponent,
    PopupFilmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
