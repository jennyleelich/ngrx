import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
  public counter: number = 0;
  constructor(private store: Store<{counterReducer: {counter: number}}>) {

  }
  ngOnInit(): void {
    this.store.select('counterReducer').subscribe(data => {
      this.counter = data.counter
    })
  }
}
