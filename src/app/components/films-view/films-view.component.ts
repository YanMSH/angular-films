import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmsService} from "../../services/films/films.service";
import {Film, Genres} from "../../models/Film";
import {FavoriteFilmService} from "../../services/favorite-film/favorite-film.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-films-view',
  templateUrl: './films-view.component.html',
  styleUrls: ['./films-view.component.scss']
})
export class FilmsViewComponent implements OnInit, OnDestroy {
  films: Film[];
  filteredFilms: Film[];
  favoriteFilm: Film | null;
  isLoading: boolean;
  destroy$ = new Subject<boolean>();
  genres = Genres;

  constructor(
    private filmsService: FilmsService,
    private favService: FavoriteFilmService
  ) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.filmsService.getFilms()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (films) => {
          this.films = films;
          this.filteredFilms = this.films;
          this.isLoading = false;
        }
      )
    this.favService.favoriteFilm$
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        favorite => {
          if (favorite) {
            this.favoriteFilm = favorite
          } else {
            this.favoriteFilm = null;
          }
        }
      )
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  filmsTrackBy(index: number, film: Film){
    return film.id;
  }

  defineFavorite(film: Film) {
    if (this.favoriteFilm) {
      return film.id === this.favoriteFilm.id
    } else {
      return false
    }
  }

  applyFilter(filterTermSelect?: string | null, filterTermSearch?: string | null) {
    if (filterTermSelect && filterTermSearch) {
      this.filteredFilms = this.films
        .filter(film => film.genre.includes(Number(filterTermSelect)))
        .filter(film => film.name.toLowerCase().includes(filterTermSearch.trim().toLowerCase()))
    } else {
      if (filterTermSelect && !filterTermSearch) {
        this.filteredFilms = this.films.filter(film => film.genre.includes(Number(filterTermSelect)));
      }
      if (!filterTermSelect && filterTermSearch) {
        this.filteredFilms = this.films.filter(film => film.name.toLowerCase().includes(filterTermSearch.trim().toLowerCase()))
      }
      if (!filterTermSelect && !filterTermSearch) {
        this.filteredFilms = this.films
      }
    }
  }

}
