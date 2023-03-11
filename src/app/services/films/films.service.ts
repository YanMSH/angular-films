import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Film} from "../../models/Film";
import {delay, map} from "rxjs";

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
          delay(300)) // добавлена небольшая задержка, чтобы было похоже на подгрузку данных с сервера
  }
}
