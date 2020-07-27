import {ApplicationRef, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  private readonly darkTheme = 'dark-theme';
  theme$ = new BehaviorSubject('light-theme');

  constructor(private ref: ApplicationRef) {
    const darkModeOn =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (darkModeOn) {
      this.theme$.next('dark-theme');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
      const turnOn = e.matches;
      this.theme$.next(turnOn ? 'dark-theme' : 'light-theme');

      this.ref.tick();
    });
  }

  toggletheme() {
    const newTheme = this.theme$.getValue() === this.darkTheme ? '' : this.darkTheme;
    this.theme$.next(newTheme);
  }
}
