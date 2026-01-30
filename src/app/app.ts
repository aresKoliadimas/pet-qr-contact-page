import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public callMe(): void {
    window.open(`tel:${1234}`, '_self');
  }
}
