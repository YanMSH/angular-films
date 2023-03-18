import { Pipe, PipeTransform } from '@angular/core';
import {Film} from "../models/Film";

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(films: Film[] | null, name?: string): Film[] | null {
    if(!films){
      return films
    }
    if(!name){
      return films
    }
    else {
      return films.filter(film => film.name.trim().toLowerCase().includes(name.trim().toLowerCase()))
    }
  }

}
