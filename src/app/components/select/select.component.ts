import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() options: (string | null)[];
  @Input() placeholder: string;
  @Output() selectValueEvent = new EventEmitter<string | null>();

  chooseValue(value: string | null) {
    this.selectValueEvent.emit(value);
  }

}
