import {Component, Input} from '@angular/core';
import {Film, Genres} from "../../models/Film";
import {FavoriteFilmService} from "../../services/favorite-film/favorite-film.service";

@Component({
  selector: 'app-films-card',
  templateUrl: './films-card.component.html',
  styleUrls: ['./films-card.component.css']
})
export class FilmsCardComponent {
  @Input () film: Film;
  @Input () isFavorite: boolean;
  constructor(
    public favService: FavoriteFilmService
  ) {
  }

  clickHandler = () => {
    this.favService.setFavorite(this.film)
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
    return this.film.genre.map(genreId => Genres[genreId]).join(', ')
  }

}
