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
    countryPrefix: '+30',
    phone: 6947627851,
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

  private get _phoneWithPrefix(): string {
    let phone = String(this.info.phone).replace(/\D/g, '');

    if (!phone.startsWith('+') && !phone.startsWith('00')) {
      phone = `${this.info.countryPrefix}${phone}`;
    }

    return phone;
  }

  public callMe(): void {
    window.open(`tel:${encodeURIComponent(this._phoneWithPrefix)}`, '_self');
  }
}
