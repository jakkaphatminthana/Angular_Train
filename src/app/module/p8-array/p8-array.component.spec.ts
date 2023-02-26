import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P8ArrayComponent } from './p8-array.component';

describe('P8ArrayComponent', () => {
  let component: P8ArrayComponent;
  let fixture: ComponentFixture<P8ArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P8ArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P8ArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
