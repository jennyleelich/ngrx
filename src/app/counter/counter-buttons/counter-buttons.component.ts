import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit{

  constructor(private store: Store<{counterReducer: {counter: number}}>) {

  }
  ngOnInit(): void {
    
  }

  incrementVal() {
    this.store.dispatch(increment());
  }

  decrementVal() {
    this.store.dispatch(decrement());
  }

  resetVal() {
   this.store.dispatch(reset());
  }
}
