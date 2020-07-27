import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibberComponent } from './fibber.component';

describe('FibberComponent', () => {
  let component: FibberComponent;
  let fixture: ComponentFixture<FibberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
