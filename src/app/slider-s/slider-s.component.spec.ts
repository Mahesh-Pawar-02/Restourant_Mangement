import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSComponent } from './slider-s.component';

describe('SliderSComponent', () => {
  let component: SliderSComponent;
  let fixture: ComponentFixture<SliderSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
