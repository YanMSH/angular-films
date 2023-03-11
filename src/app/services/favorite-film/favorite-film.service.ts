import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {Film} from "../../models/Film";

@Injectable({
  providedIn: 'root'
})
export class FavoriteFilmService {
  favoriteFilm$ = new ReplaySubject<Film | null>(1);

  constructor() {
    const favoriteString = localStorage.getItem('favorite');
    if (favoriteString) {
      const favorite = JSON.parse(favoriteString)
      this.favoriteFilm$.next(favorite)
    }
  }

  setFavorite(film: Film) {
    const previousFavoriteString = localStorage.getItem('favorite');
    if(previousFavoriteString){
      const previousFavorite = JSON.parse(previousFavoriteString);
      if(previousFavorite.id === film.id){
        localStorage.removeItem('favorite');
        this.favoriteFilm$.next(null)
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
