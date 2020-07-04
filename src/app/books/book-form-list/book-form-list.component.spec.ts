import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormListComponent } from './book-form-list.component';

describe('BookFormListComponent', () => {
  let component: BookFormListComponent;
  let fixture: ComponentFixture<BookFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
