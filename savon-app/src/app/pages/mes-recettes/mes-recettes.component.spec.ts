import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesCalculatorPageComponent } from './mes-recettes.component';

describe('MesRecettesComponent', () => {
  let component: RecettesCalculatorPageComponent;
  let fixture: ComponentFixture<RecettesCalculatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecettesCalculatorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecettesCalculatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
