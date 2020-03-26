import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProyectComponent } from './new-proyect.component';

describe('NewProyectComponent', () => {
  let component: NewProyectComponent;
  let fixture: ComponentFixture<NewProyectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProyectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
