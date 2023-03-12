import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-message',
  template: `<p class="loading-message">Загрузка...</p>`,
  styles: [`.loading-message {
    width: 100vw;
    height: 100vh;
    text-align: center;
    line-height: 75vh;
    font-size: 48px;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
  }`],
  standalone: true,
  imports: [LoadingMessageComponent]
})
export class LoadingMessageComponent {

}
