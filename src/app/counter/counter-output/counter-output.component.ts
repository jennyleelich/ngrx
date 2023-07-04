import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
  public counter$!: Observable<CounterState>;
  constructor(private store: Store<{counterReducer: CounterState}>) {

  }
  ngOnInit(): void {
    this.counter$ = this.store.select('counterReducer')
  }
}
