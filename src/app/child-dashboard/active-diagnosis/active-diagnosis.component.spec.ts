import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDiagnosisComponent } from './active-diagnosis.component';

describe('ActiveDiagnosisComponent', () => {
  let component: ActiveDiagnosisComponent;
  let fixture: ComponentFixture<ActiveDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
