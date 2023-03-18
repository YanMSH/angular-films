import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {Film} from "../../models/Film";

@Injectable({
  providedIn: 'root'
})
export class FavoriteFilmService {
  favoriteFilm$ = new ReplaySubject<Film | null>(1);
  currentFavoriteFilm : Film | null;
  constructor() {
    const favoriteString = localStorage.getItem('favorite');
    this.favoriteFilm$.subscribe(
      v => this.currentFavoriteFilm = v
    )
    if (favoriteString) {
      const favorite = JSON.parse(favoriteString);
      this.favoriteFilm$.next(favorite);
    }
    else {
      this.favoriteFilm$.next(null);
    }
  }

  setFavorite(film: Film) {
    if(this.currentFavoriteFilm){
      if(this.currentFavoriteFilm.id === film.id){
        localStorage.removeItem('favorite');
        this.favoriteFilm$.next(null);
      } else {
        localStorage.setItem('favorite', JSON.stringify(film))
        this.favoriteFilm$.next(film);
      }
    } else {
      localStorage.setItem('favorite', JSON.stringify(film))
      this.favoriteFilm$.next(film);
    }
  }
}
