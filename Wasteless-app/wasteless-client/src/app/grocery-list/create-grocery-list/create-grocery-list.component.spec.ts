import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroceryListComponent } from './create-grocery-list.component';

describe('CreateGroceryListComponent', () => {
  let component: CreateGroceryListComponent;
  let fixture: ComponentFixture<CreateGroceryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGroceryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroceryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
