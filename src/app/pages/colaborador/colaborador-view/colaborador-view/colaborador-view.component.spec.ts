import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorViewComponent } from './colaborador-view.component';

describe('ColaboradorViewComponent', () => {
  let component: ColaboradorViewComponent;
  let fixture: ComponentFixture<ColaboradorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradorViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColaboradorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
