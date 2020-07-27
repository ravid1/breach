import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BreachDataService} from '../../services/breach-data.service';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {debounceTime, distinct, filter} from 'rxjs/operators';

@Component({
  selector: 'breach-list',
  templateUrl: './breach-list.component.html',
  styleUrls: ['./breach-list.component.scss']
})
export class BreachListComponent implements OnInit, OnDestroy {

  breachList$: Observable<any[]>;

  private subscription: Subscription;

  @HostListener('window:scroll', []) onWindowScroll(e) {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    console.log('e', e);
    if (pos + 20 >= max) {
      // this.updateBreachList();
    }
  }

  constructor(private breachListService: BreachDataService) { }

  ngOnInit() {
    this.subscription = fromEvent(window, 'scroll').pipe(
      filter(() => document.documentElement.scrollTop + document.documentElement.offsetHeight + 20 >= document.documentElement.scrollHeight),
      debounceTime(300),
      distinct()
    ).subscribe(res => {
      this.updateBreachList();
    });
    this.updateBreachList();
    this.breachList$ = this.breachListService.breachList$;
  }

  updateBreachList() {
    this.breachListService.getBreachData();
  }

  onBreachClicked(isCollapsed, index) {
    this.breachListService.updateSelectedItems(isCollapsed, index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
