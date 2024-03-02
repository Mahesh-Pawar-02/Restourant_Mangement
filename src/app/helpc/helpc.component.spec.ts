import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcComponent } from './helpc.component';

describe('HelpcComponent', () => {
  let component: HelpcComponent;
  let fixture: ComponentFixture<HelpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
