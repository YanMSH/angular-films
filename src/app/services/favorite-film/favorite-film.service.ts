import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {Film} from "../../models/Film";

@Injectable({
  providedIn: 'root'
})
export class FavoriteFilmService {
  favoriteFilm$ = new ReplaySubject<Film | null>(1);
  currentFavoriteFilm: Film | null;

  constructor() {
    const favorite = this.getFavorite();
    this.favoriteFilm$.subscribe(
      v => this.currentFavoriteFilm = v
    )
    if (favorite) {
      this.favoriteFilm$.next(favorite);
    } else {
      this.favoriteFilm$.next(null);
    }
  }

  setFavorite(film: Film) {
    localStorage.setItem('favorite', JSON.stringify(film))
    this.favoriteFilm$.next(film);
  }

  getFavorite() {
    const favoriteString = localStorage.getItem('favorite');
    return favoriteString ? JSON.parse(favoriteString) : null;
  }

  removeFavorite() {
    localStorage.removeItem('favorite');
    this.favoriteFilm$.next(null);
  }

  toggleFavorite(film: Film) {
    if (this.currentFavoriteFilm) {
      if (this.currentFavoriteFilm.id === film.id) {
        this.removeFavorite();
      } else {
        this.setFavorite(film);
      }
    } else {
      this.setFavorite(film);
    }
  }
}
