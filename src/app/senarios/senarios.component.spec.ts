import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenariosComponent } from './senarios.component';

describe('SenariosComponent', () => {
  let component: SenariosComponent;
  let fixture: ComponentFixture<SenariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
