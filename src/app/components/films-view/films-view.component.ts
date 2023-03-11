import {Component, OnInit} from '@angular/core';
import {FilmsService} from "../../services/films/films.service";
import {Film} from "../../models/Film";
import {FavoriteFilmService} from "../../services/favorite-film/favorite-film.service";

@Component({
  selector: 'app-films-view',
  templateUrl: './films-view.component.html',
  styleUrls: ['./films-view.component.css']
})
export class FilmsViewComponent implements OnInit {
  films: Film[];
  favoriteFilm: Film | null;
  constructor(
    private filmsService: FilmsService,
    private favService: FavoriteFilmService
    ) {

  }
  ngOnInit() {
    this.filmsService.getFilms().subscribe(
      (films) => this.films = films
    )
    this.favService.favoriteFilm$.subscribe(
      favorite => {
        if(favorite) {
          this.favoriteFilm = favorite
        } else {
          this.favoriteFilm = null;
        }
      }
    )
  }

  defineFavorite(film: Film){
    if(this.favoriteFilm){
      return film.id === this.favoriteFilm.id
    }
    else {
      return false
    }
  }

}
