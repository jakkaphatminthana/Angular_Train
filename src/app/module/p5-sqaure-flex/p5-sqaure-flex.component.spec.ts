import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5SqaureFlexComponent } from './p5-sqaure-flex.component';

describe('P5SqaureFlexComponent', () => {
  let component: P5SqaureFlexComponent;
  let fixture: ComponentFixture<P5SqaureFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5SqaureFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5SqaureFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
