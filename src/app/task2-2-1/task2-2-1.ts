import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-task2-2-1',
  styleUrl: './task2-2-1.css',
  templateUrl: './task2-2-1.html',
})
export class Task221 {
  buttonText: string = "Click me!";
  buttonColor: string = "blue";

  @Output() buttonData = new EventEmitter<{text: string, color: string}>();

  click(){
    this.buttonData.emit({text: this.buttonText, color: this.buttonColor});
  }
}
