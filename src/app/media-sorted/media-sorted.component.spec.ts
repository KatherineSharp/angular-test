import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSortedComponent } from './media-sorted.component';

describe('MediaSortedComponent', () => {
  let component: MediaSortedComponent;
  let fixture: ComponentFixture<MediaSortedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaSortedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaSortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
