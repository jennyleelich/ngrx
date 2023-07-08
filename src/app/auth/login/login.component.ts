import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state/app.state';
import { loginStart } from '../state/auth.action';
import { SET_LOADING_ACTION, setLoadingSpinner } from 'src/app/shared/state/share.actions';
import { AuthState } from '../state/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup | undefined;
constructor(private store: Store<AppState>) {}
ngOnInit(): void {
  this.createForm();
}

createForm () {
  this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
}

onLoginSubmit() {
  const data = this.loginForm?.value;
  this.store.dispatch(setLoadingSpinner({status:true}))
  this.store.dispatch(loginStart(data))
}


}
