import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {ThemingService} from './services/theming.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {

  @HostBinding('class') public cssClass: string;

  private subscription: Subscription;


  constructor(private themingService: ThemingService) {
  }

  ngOnInit() {
    this.subscription = this.themingService.theme$.subscribe((theme: string) => {
      this.cssClass = theme;
    });
  }

  toggleTheme() {
    this.themingService.toggletheme();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
