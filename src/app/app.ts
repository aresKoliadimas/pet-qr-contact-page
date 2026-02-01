import { Component } from '@angular/core';
import { SocialMedia } from '../interfaces/social.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public readonly petName: string = 'Majin Zak';
  public readonly homeArea: string = 'Thessaloniki, Analipsi';
  public readonly phoneNumber: string = '+306947627851';
  public readonly socials: SocialMedia[] = [
    {
      id: 'instagram',
      iconPath: '/assets/instagram.png',
      altText: 'Instagram icon',
      handler: '@kukunares',
      socialMediaUrl: 'https://www.instagram.com/kukunares',
    },
    {
      id: 'facebook',
      iconPath: '/assets/facebook.png',
      altText: 'Facebook icon',
      handler: '/kukunaress',
      socialMediaUrl: 'https://www.facebook.com/kukunaress',
    },
  ];
}
