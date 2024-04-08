import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearSlideComponent } from './linear-slide.component';

describe('LinearSlideComponent', () => {
  let component: LinearSlideComponent;
  let fixture: ComponentFixture<LinearSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearSlideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinearSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
