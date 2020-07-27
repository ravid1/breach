import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreachDataService implements OnDestroy {

  private readonly url: string = 'https://guard.io/v2/hiring/fe/breaches';

  private _breachList = new BehaviorSubject<any[]>([]);
  private offset = 0;
  private _selectedItems: Object;

  public breachList$ = this._breachList.asObservable();

  get collapsedItems() {
    return this._selectedItems;
  }

  constructor(private http: HttpClient) {
    this._selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
  }

  getBreachData() {
    this.http.get(`${this.url}?offset=${this.offset}`, {
      headers: new HttpHeaders({
        'X-Best-Pokemon': 'charmeleon'
      })
    }).subscribe((res: any) => {
      const currentData = this._breachList.getValue();
      this._breachList.next([...currentData, ...res.items]);
      this.offset = this.offset + 10;
    });
  }

  updateSelectedItems(isCollapsed, index) {
    if (this._selectedItems[index]) {
      delete this._selectedItems[index];
    } else {
      this._selectedItems[index] = true;
    }
    localStorage.setItem('selectedItems', JSON.stringify(this._selectedItems));
  }

  ngOnDestroy() {
  }
}
