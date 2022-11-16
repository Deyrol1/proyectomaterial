import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuusuarioComponent } from './actuusuario.component';

describe('ActuusuarioComponent', () => {
  let component: ActuusuarioComponent;
  let fixture: ComponentFixture<ActuusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuusuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActuusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
