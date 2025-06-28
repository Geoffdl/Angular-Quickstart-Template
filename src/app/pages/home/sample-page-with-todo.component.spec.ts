import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageWithTodoComponent } from './sample-page-with-todo.component';

describe('SamplePageWithTodoComponent', () => {
  let component: SamplePageWithTodoComponent;
  let fixture: ComponentFixture<SamplePageWithTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamplePageWithTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePageWithTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
