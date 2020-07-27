import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreachItemComponent } from './breach-item.component';

describe('BreachItemComponent', () => {
  let component: BreachItemComponent;
  let fixture: ComponentFixture<BreachItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreachItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreachItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
