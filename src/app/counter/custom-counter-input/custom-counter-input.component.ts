import { Component } from '@angular/core';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent {
  constructor(private store: Store<{counterReducer: CounterState}>) {

  }
public value: number = 0;
addValue() {
  this.store.dispatch(customIncrement({value: +this.value}));
}
}
