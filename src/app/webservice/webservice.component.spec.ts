import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebserviceComponent } from './webservice.component';

describe('WebserviceComponent', () => {
  let component: WebserviceComponent;
  let fixture: ComponentFixture<WebserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
