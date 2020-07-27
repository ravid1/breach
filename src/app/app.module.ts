import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BreachListComponent} from './components/breachs-list/breach-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BreachItemComponent} from './components/breachs-list/breach-item/breach-item.component';
import {RouterModule} from '@angular/router';
import { ExtraDetailsComponent } from './components/breachs-list/extra-details/extra-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BreachListComponent,
    BreachItemComponent,
    ExtraDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
