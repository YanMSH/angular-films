import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FilmPopupData} from "../../models/Film";

@Component({
  selector: 'app-popup-film',
  templateUrl: './popup-film.component.html',
  styleUrls: ['./popup-film.component.scss']
})
export class PopupFilmComponent {
  title: string;
  year: number;
  genres: string;
  description: string;
  imageUrl: string;
  isFavorite: boolean;
  toggleFavorite: () => void;
  constructor(
    @Inject(MAT_DIALOG_DATA) data: FilmPopupData
  ) {
    this.title = data.name;
    this.year = data.year;
    this.genres = data.genres;
    this.title = data.name;
    this.description = data.description;
    this.imageUrl = data.imageUrl!;
    this.isFavorite = data.isFavorite;
    this.toggleFavorite = data.toggleFavorite;
  }

  toggleFavoriteHandler(){
    this.toggleFavorite()
    setTimeout(() => this.isFavorite = !this.isFavorite, 250); //добавлена небольшая задержка для улучшения внешнего вида. Так анимация успевает проиграться
  }
}
