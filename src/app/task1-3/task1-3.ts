import { Component } from '@angular/core';
import { NgClass, CurrencyPipe } from '@angular/common';

@Component({
  imports: [NgClass, CurrencyPipe],
  selector: 'app-task1-3',
  styleUrl: './task1-3.css',
  templateUrl: './task1-3.html',
})
export class Task13 {
  orders = [
    {Id: 1, Name: "client1", Status: "paid", Sum: 50.45},
    {Id: 2, Name: "client2", Status: "pending", Sum: 150.50},
    {Id: 3, Name: "client3", Status: "cancelled", Sum: 170.45},
    {Id: 4, Name: "client4", Status: "paid", Sum: 30.30},
    {Id: 5, Name: "client5", Status: "pending", Sum: 10.34},
    {Id: 6, Name: "client6", Status: "cancelled", Sum: 600.00},
    {Id: 7, Name: "client7", Status: "paid", Sum: 230.40}
  ]
}
