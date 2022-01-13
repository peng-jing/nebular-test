import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperShowcaseComponent } from './stepper-showcase.component';

describe('StepperShowcaseComponent', () => {
  let component: StepperShowcaseComponent;
  let fixture: ComponentFixture<StepperShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
