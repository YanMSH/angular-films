import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {FilmsService} from "../../services/films/films.service";
import {Film, Genres} from "../../models/Film";
import {FavoriteFilmService} from "../../services/favorite-film/favorite-film.service";
import {Observable, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-films-view',
  templateUrl: './films-view.component.html',
  styleUrls: ['./films-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmsViewComponent implements OnInit, OnDestroy {

  favoriteFilm: Film | null;
  destroy$ = new Subject<boolean>();
  genres = Genres;
  selectedGenre: string | null = null;
  searchTerm: string;
  films$: Observable<Film[]>

  constructor(
    private filmsService: FilmsService,
    private favService: FavoriteFilmService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  setGenre(value: string | null) {
    this.selectedGenre = value;
  }

  setSearch(value: string) {
    this.searchTerm = value;
  }

  ngOnInit() {
    this.films$ = this.filmsService.getFilms();
    this.favService.favoriteFilm$
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        favorite => {
          if (favorite) {
            this.favoriteFilm = favorite
          } else {
            this.favoriteFilm = null;
          }
          this.cdr.markForCheck()
        }
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
