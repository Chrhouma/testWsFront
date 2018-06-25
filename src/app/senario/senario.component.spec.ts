import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenarioComponent } from './senario.component';

describe('SenarioComponent', () => {
  let component: SenarioComponent;
  let fixture: ComponentFixture<SenarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
