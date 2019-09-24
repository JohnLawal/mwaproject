import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpackageComponent } from './viewpackage.component';

describe('ViewpackageComponent', () => {
  let component: ViewpackageComponent;
  let fixture: ComponentFixture<ViewpackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
