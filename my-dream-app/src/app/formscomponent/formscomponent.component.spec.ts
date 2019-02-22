import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormscomponentComponent } from './formscomponent.component';

describe('FormscomponentComponent', () => {
  let component: FormscomponentComponent;
  let fixture: ComponentFixture<FormscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
