import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task211 } from './task2-1-1';

describe('Task211', () => {
  let component: Task211;
  let fixture: ComponentFixture<Task211>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task211],
    }).compileComponents();

    fixture = TestBed.createComponent(Task211);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
