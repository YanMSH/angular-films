import {Component, Input} from '@angular/core';
import {Film} from "../../models/Film";
import {FavoriteFilmService} from "../../services/favorite-film/favorite-film.service";
import {MatDialog} from "@angular/material/dialog";
import {PopupFilmComponent} from "../popup-film/popup-film.component";

@Component({
  selector: 'app-films-card',
  templateUrl: './films-card.component.html',
  styleUrls: ['./films-card.component.scss']
})
export class FilmsCardComponent {
  @Input () film: Film;
  @Input () isFavorite: boolean;
  constructor(
    public favService: FavoriteFilmService,
    public dialog: MatDialog,
  ) {
  }

  clickHandler = () => {
    this.favService.setFavorite(this.film)
  }

  openDialog(){
    this.dialog.open(PopupFilmComponent, {
      data: {
        id: this.film.id,
        name: this.title,
        year: this.year,
        genre: this.genres,
        description: this.film.description,
        imageUrl: this.image,
        isFavorite: this.isFavorite,
        toggleFavorite: this.clickHandler,
      }
    })
  }

  get title(){
    return this.film.name
  }

  get image(){
    return this.film.imageUrl
  }

  get year() {
    return this.film.year
  }

  get genres() {
    return this.film.genre;
  }

}
