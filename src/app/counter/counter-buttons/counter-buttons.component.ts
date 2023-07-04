import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit{

 @Output() increment = new EventEmitter();
 @Output() decrement = new EventEmitter();
 @Output() reset = new EventEmitter();
  ngOnInit(): void {
    
  }

  incrementVal() {
    this.increment.emit();
  }

  decrementVal() {
    this.decrement.emit();
  }

  resetVal() {
   this.reset.emit();
  }
}
