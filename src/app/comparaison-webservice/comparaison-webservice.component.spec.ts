import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparaisonWebserviceComponent } from './comparaison-webservice.component';

describe('ComparaisonWebserviceComponent', () => {
  let component: ComparaisonWebserviceComponent;
  let fixture: ComponentFixture<ComparaisonWebserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparaisonWebserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparaisonWebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
