import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveMedicatonComponent } from './active-medicaton.component';

describe('ActiveMedicatonComponent', () => {
  let component: ActiveMedicatonComponent;
  let fixture: ComponentFixture<ActiveMedicatonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveMedicatonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveMedicatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
