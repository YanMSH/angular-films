import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Film} from "../../models/Film";
import {catchError, delay, EMPTY, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
    constructor(
      private http: HttpClient
    ) { }

  getFilms(){
      return this.http.get<Film[]>('assets/data/data.json')
        .pipe(
          map(films =>
          films.map(film => {
            film.imageUrl = `images/${film.id}.jpeg`;
            return film;
          } )),
          catchError(() => EMPTY),
          delay(300)) // добавлена небольшая задержка, чтобы было похоже на подгрузку данных с сервера
  }

  getFilteredFilms(selectedGenre?: string, searchTerm?: string){
      this.getFilms().pipe(
        map((films) => {
          const search = (film: Film, searchTerm?: string) => {
            if(!searchTerm){
              return true
            }
            else {
              return film.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
            }
          }
          const select = (film: Film, selectedGenre?: string) => {
            if(!selectedGenre){
              return true
            }
            else {
              return film.genre.includes((Number(selectedGenre)))
            }
          }
          films.filter(film => search(film, searchTerm) && select(film, selectedGenre))
        })
      )
  }
}
