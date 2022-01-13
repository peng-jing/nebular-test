import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleLayoutComponent } from './style-layout.component';

describe('StyleLayoutComponent', () => {
  let component: StyleLayoutComponent;
  let fixture: ComponentFixture<StyleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
