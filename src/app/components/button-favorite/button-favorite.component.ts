import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-favorite',
  templateUrl: './button-favorite.component.html',
  styleUrls: ['./button-favorite.component.scss']
})
export class ButtonFavoriteComponent {
  @Input() isFavorite: boolean;
  @Input() clickHandler: () => void;
}
