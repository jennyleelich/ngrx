import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state/app.state';
import { signupStart } from '../state/auth.action';
import { setLoadingSpinner } from 'src/app/shared/state/share.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup | undefined;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.createForm();
  }

  createForm () {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSignupSubmit() {
    const data = this.signupForm?.value;
    this.store.dispatch(setLoadingSpinner({status: true}))
    this.store.dispatch(signupStart(data));

  }

}
