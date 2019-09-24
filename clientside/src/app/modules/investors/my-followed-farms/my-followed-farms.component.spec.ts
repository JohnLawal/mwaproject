import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFollowedFarmsComponent } from './my-followed-farms.component';

describe('MyFollowedFarmsComponent', () => {
  let component: MyFollowedFarmsComponent;
  let fixture: ComponentFixture<MyFollowedFarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFollowedFarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFollowedFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
