import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';

const CounterRoute: Routes = [
  {
    path: '',
    component: CounterComponent
  }
]

@NgModule({
  declarations: [
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CustomCounterInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CounterRoute),
    FormsModule,
    StoreModule.forFeature('counter',counterReducer)
  ]
})
export class CounterModule { }
