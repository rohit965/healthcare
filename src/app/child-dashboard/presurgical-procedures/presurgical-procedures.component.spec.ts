import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresurgicalProceduresComponent } from './presurgical-procedures.component';

describe('PresurgicalProceduresComponent', () => {
  let component: PresurgicalProceduresComponent;
  let fixture: ComponentFixture<PresurgicalProceduresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresurgicalProceduresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresurgicalProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
