import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadotareasComponent } from './listadotareas.component';

describe('ListadotareasComponent', () => {
  let component: ListadotareasComponent;
  let fixture: ComponentFixture<ListadotareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadotareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadotareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
