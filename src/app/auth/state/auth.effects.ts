import { Injectable } from "@angular/core";
import { loginFail, loginStart, loginSuccess } from "./auth.action";
import { map, mergeMap, catchError, exhaustMap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/service/auth.service";
import { EMPTY, of } from "rxjs";
import { AppState } from "src/app/app-state/app.state";
import { Store } from "@ngrx/store";
import { setErrorMessage, setLoadingSpinner } from "src/app/shared/state/share.actions";
@Injectable()
export class AuthEffects{
    constructor(private authService: AuthService, private actions$: Actions, private store: Store<AppState>) {

    }
    login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => this.authService.login(action.email,action.password)
        .pipe(
          map(response =>  {
            this.store.dispatch(setLoadingSpinner({status:false}));
            const user = this.authService.formatUser(response);
            return loginSuccess({user})
          }),
          catchError((errRes) => {
            this.store.dispatch(setLoadingSpinner({status:false}));
            const errorMsg = this.authService.getErrorMessage(errRes.error.error.message)
            return of(setErrorMessage({message: errorMsg}))
          })
        )
      )
    )
  );
    
   
}
                

