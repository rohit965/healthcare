import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugeonsNotesComponent } from './sugeons-notes.component';

describe('SugeonsNotesComponent', () => {
  let component: SugeonsNotesComponent;
  let fixture: ComponentFixture<SugeonsNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugeonsNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugeonsNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
