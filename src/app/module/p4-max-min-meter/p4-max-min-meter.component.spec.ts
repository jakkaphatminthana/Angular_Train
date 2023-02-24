import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4MaxMinMeterComponent } from './p4-max-min-meter.component';

describe('P4MaxMinMeterComponent', () => {
  let component: P4MaxMinMeterComponent;
  let fixture: ComponentFixture<P4MaxMinMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P4MaxMinMeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P4MaxMinMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
