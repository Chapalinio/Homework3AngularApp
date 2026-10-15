import { Component, signal } from '@angular/core';
import { Task11 } from './task1-1/task1-1';
import { Task12 } from './task1-2/task1-2';
import { Task13 } from './task1-3/task1-3';
import { Task211 } from './task2-1-1/task2-1-1';
import { Task221 } from './task2-2-1/task2-2-1';

@Component({
  imports: [Task11, Task12, Task13, Task211, Task221],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //TASK2.1.1:
  randomNumber: number = 0;

  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  }

  //TASK2.2.1:
  recievedText: string = "";
  recievedColor: string = "";

  receiveData(data: any) {
    this.recievedText = data.text;
    this.recievedColor = data.color;
  }
}
