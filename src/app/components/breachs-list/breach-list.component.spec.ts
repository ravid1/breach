import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreachListComponent } from './breach-list.component';

describe('BreachListComponent', () => {
  let component: BreachListComponent;
  let fixture: ComponentFixture<BreachListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreachListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreachListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
