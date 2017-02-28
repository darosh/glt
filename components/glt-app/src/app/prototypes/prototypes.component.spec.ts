import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypesComponent } from './prototypes.component';

describe('PrototypesComponent', () => {
  let component: PrototypesComponent;
  let fixture: ComponentFixture<PrototypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrototypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
