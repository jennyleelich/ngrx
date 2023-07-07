import { Injectable } from "@angular/core";
import { loginStart, loginSuccess } from "./auth.action";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/service/auth.service";
import { EMPTY } from "rxjs";
import { AppState } from "src/app/app-state/app.state";
import { Store } from "@ngrx/store";
import { setLoadingSpinner } from "src/app/shared/state/share.actions";
@Injectable()
export class AuthEffects{
    constructor(private authService: AuthService, private actions$: Actions, private store: Store<AppState>) {

    }

    // login$ = createEffect(():any=>{
    //     return this.actions$
    //     .pipe(
    //         ofType(loginStart),
    //         mergeMap(( action )=> this.authService.login(action.email,action.password)
    //         .pipe(
    //             map(response => ({type: loginSuccess, payload: this.authService.formatUser(response)}), 
    //             catchError(()=> EMPTY))
    //         )
    //         )
    //     )
    // })

    login$ = createEffect(():any=>{
        return this.actions$
        .pipe(
            ofType(loginStart),
            mergeMap(( action )=> this.authService.login(action.email,action.password)
            .pipe(
                map(response => {
                    this.store.dispatch(setLoadingSpinner({status:false}));
                    const user = this.authService.formatUser(response);
                    return loginSuccess({user});
                } , 
                catchError(()=> EMPTY))
            )
            )
        )
    })
    
   
}
                

