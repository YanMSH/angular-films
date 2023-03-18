import { Pipe, PipeTransform } from '@angular/core';
import {Film} from "../models/Film";

@Pipe({
  name: 'filterByGenre'
})
export class FilterByGenrePipe implements PipeTransform {

  transform(films: Film[] | null, genre?: string | null): Film[] | null {
    if(!films){
      return films
    }
    if(!genre){
      return films
    }
    else {
      return films.filter(film => film.genre.includes(Number(genre)))
    }
  }

}
