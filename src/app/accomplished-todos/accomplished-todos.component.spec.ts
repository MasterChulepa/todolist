import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomplishedTodosComponent } from './accomplished-todos.component';

describe('AccomplishedTodosComponent', () => {
  let component: AccomplishedTodosComponent;
  let fixture: ComponentFixture<AccomplishedTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomplishedTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomplishedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
