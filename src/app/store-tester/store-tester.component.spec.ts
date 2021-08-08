import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTesterComponent } from './store-tester.component';

describe('StoreTesterComponent', () => {
  let component: StoreTesterComponent;
  let fixture: ComponentFixture<StoreTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
