import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() placeholder: string;
  @Input() type: string;
  @Output() inputValueEvent = new EventEmitter<string>();

  typeValue(value: string) {
    this.inputValueEvent.emit(value);
  }
}
