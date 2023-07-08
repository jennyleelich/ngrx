import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SharedState } from './shared/state/shared.state';
import { getErrorMessage, getLoading, getSharedState } from './shared/state/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrx-counter';
  showLoading: Observable<boolean> | undefined;
  showErrorMessage: Observable<string> | undefined;
  constructor(private store: Store<SharedState>) {

  }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    this.showErrorMessage = this.store.select(getErrorMessage);
  }
}
