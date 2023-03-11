import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-favorite',
  templateUrl: './button-favorite.component.html',
  styleUrls: ['./button-favorite.component.css']
})
export class ButtonFavoriteComponent {
  @Input () isFavorite: boolean;
  @Input () clickHandler: () => void;
}
