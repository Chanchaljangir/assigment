import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateSuperviourComponent } from './allocate-superviour.component';

describe('AllocateSuperviourComponent', () => {
  let component: AllocateSuperviourComponent;
  let fixture: ComponentFixture<AllocateSuperviourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocateSuperviourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateSuperviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
