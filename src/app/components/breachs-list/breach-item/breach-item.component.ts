import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'breach-item',
  templateUrl: './breach-item.component.html',
  styleUrls: ['./breach-item.component.scss']
})
export class BreachItemComponent implements OnInit {

  @Input() breachData: any;
  @Input() isCollapsed = false;

  @Output() itemClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.isCollapsed = !this.isCollapsed;
    this.itemClicked.emit(this.isCollapsed);
  }
}
