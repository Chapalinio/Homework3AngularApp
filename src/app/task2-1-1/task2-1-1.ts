import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-task2-1-1',
  styleUrl: './task2-1-1.css',
  templateUrl: './task2-1-1.html',
})
export class Task211 {
  randomNumbers: number[] = [];
  
  @Input() 
  set randomNumber(value: number){
    if (value !== 0) {
      this.randomNumbers.push(value);
    }
  }
}
