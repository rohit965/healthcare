import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartandprofileComponent } from './chartandprofile.component';

describe('ChartandprofileComponent', () => {
  let component: ChartandprofileComponent;
  let fixture: ComponentFixture<ChartandprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartandprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartandprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
