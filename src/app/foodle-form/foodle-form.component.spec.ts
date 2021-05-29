import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodleFormComponent } from './foodle-form.component';

describe('FoodleFormComponent', () => {
  let component: FoodleFormComponent;
  let fixture: ComponentFixture<FoodleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
