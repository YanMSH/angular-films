import {Component, OnInit} from '@angular/core';
import {FilmsService} from "../../services/films/films.service";
import {Film, Genres} from "../../models/Film";
import {FavoriteFilmService} from "../../services/favorite-film/favorite-film.service";

@Component({
  selector: 'app-films-view',
  templateUrl: './films-view.component.html',
  styleUrls: ['./films-view.component.css']
})
export class FilmsViewComponent implements OnInit {
  films: Film[];
  filteredFilms: Film[];
  favoriteFilm: Film | null;
  genres = Genres;
  constructor(
    private filmsService: FilmsService,
    private favService: FavoriteFilmService
    ) {

  }
  ngOnInit() {
    this.filmsService.getFilms().subscribe(
      (films) => {
        this.films = films;
        this.filteredFilms = this.films;
      }
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

  applyFilter(filterTermSelect?: string | null, filterTermSearch?: string | null){
    if(filterTermSelect && filterTermSearch){
      this.filteredFilms = this.films
        .filter(film => film.genre.includes(Number(filterTermSelect)))
        .filter(film => film.name.toLowerCase().includes(filterTermSearch.trim().toLowerCase()))
    } else {
      if(filterTermSelect && !filterTermSearch){
        this.filteredFilms = this.films.filter(film => film.genre.includes(Number(filterTermSelect)));
      }
      if(!filterTermSelect && filterTermSearch){
        this.filteredFilms = this.films.filter(film => film.name.toLowerCase().includes(filterTermSearch.trim().toLowerCase()))
      }
      if(!filterTermSelect && !filterTermSearch){
        this.filteredFilms = this.films
      }
    }
  }

}
