import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P11PrimengTableComponent } from './p11-primeng-table.component';

describe('P11PrimengTableComponent', () => {
  let component: P11PrimengTableComponent;
  let fixture: ComponentFixture<P11PrimengTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P11PrimengTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P11PrimengTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
