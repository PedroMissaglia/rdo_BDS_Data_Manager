import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdoComponent } from './rdo/rdo.component';

describe('RdoComponent', () => {
  let component: RdoComponent;
  let fixture: ComponentFixture<RdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
