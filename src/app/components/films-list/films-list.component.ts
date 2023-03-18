import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Film} from "../../models/Film";

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FilmsListComponent {
  @Input() films: Film[] | null;
  @Input() genre: string | null;
  @Input() search: string;
  @Input() filterable: boolean;
  @Input() favoriteFilm: Film | null;

  constructor() {
  }

  filmsTrackBy(index: number, film: Film) {
    return film.id;
  }

  defineFavorite(film: Film) {
    if (this.favoriteFilm) {
      return film.id === this.favoriteFilm.id
    } else {
      return false
    }
  }
}
