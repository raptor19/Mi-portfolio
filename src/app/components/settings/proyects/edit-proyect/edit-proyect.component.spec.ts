import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProyectComponent } from './edit-proyect.component';

describe('EditProyectComponent', () => {
  let component: EditProyectComponent;
  let fixture: ComponentFixture<EditProyectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProyectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
