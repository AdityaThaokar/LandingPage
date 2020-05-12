import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcardsComponent } from './testcards.component';

describe('TestcardsComponent', () => {
  let component: TestcardsComponent;
  let fixture: ComponentFixture<TestcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
