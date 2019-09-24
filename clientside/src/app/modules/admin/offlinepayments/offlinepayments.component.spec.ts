import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinepaymentsComponent } from './offlinepayments.component';

describe('OfflinepaymentsComponent', () => {
  let component: OfflinepaymentsComponent;
  let fixture: ComponentFixture<OfflinepaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflinepaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflinepaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
