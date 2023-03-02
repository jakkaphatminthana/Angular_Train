import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P13GetSetComponent } from './p13-get-set.component';

describe('P13GetSetComponent', () => {
  let component: P13GetSetComponent;
  let fixture: ComponentFixture<P13GetSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P13GetSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P13GetSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
