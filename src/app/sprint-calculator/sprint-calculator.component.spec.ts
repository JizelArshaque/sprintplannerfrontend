import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintCalculatorComponent } from './sprint-calculator.component';

describe('SprintCalculatorComponent', () => {
  let component: SprintCalculatorComponent;
  let fixture: ComponentFixture<SprintCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SprintCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
