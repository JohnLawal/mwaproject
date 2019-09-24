import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmemberComponent } from './viewmember.component';

describe('ViewmemberComponent', () => {
  let component: ViewmemberComponent;
  let fixture: ComponentFixture<ViewmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
