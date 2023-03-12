import {Pipe, PipeTransform} from '@angular/core';
import {Genres} from "../models/Film";

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {
  genres = Genres;

  transform(value: number[]): string {
    return value.map(genreIndex => this.genres[genreIndex]).join(', ')
  }

}
