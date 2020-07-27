import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'extra-details',
  templateUrl: './extra-details.component.html',
  styleUrls: ['./extra-details.component.scss']
})
export class ExtraDetailsComponent implements OnInit {

  @Input() breachData: any;

  constructor() { }

  ngOnInit() {
  }

}
