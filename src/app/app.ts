import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public readonly info = {
    petName: 'Majin Zak',
    homeArea: 'Thessaloniki, Analipsi',
    phone: '+306947627851',
    socials: [
      {
        id: 'instagram',
        iconPath: '/assets/instagram.png',
        altText: 'Instagram icon',
        handler: '@kukunares',
      },
      {
        id: 'facebook',
        iconPath: '/assets/facebook.png',
        altText: 'Facebook icon',
        handler: '/kukunaress',
      },
    ],
  };

  public callMe(): void {
    window.open(`tel:${encodeURIComponent(this.info.phone)}`, '_self');
  }
}
