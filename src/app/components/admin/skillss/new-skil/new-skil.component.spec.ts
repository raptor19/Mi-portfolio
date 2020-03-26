import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSkilComponent } from './new-skil.component';

describe('NewSkilComponent', () => {
  let component: NewSkilComponent;
  let fixture: ComponentFixture<NewSkilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSkilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSkilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
