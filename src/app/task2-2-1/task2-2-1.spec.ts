import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task221 } from './task2-2-1';

describe('Task221', () => {
  let component: Task221;
  let fixture: ComponentFixture<Task221>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task221],
    }).compileComponents();

    fixture = TestBed.createComponent(Task221);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
