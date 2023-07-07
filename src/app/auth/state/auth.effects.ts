import { Injectable } from "@angular/core";
import { loginStart, loginSuccess } from "./auth.action";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/service/auth.service";
import { EMPTY } from "rxjs";
@Injectable()
export class AuthEffects{
    constructor(private authService: AuthService, private actions$: Actions) {

    }

    login$ = createEffect(():any=>{
        return this.actions$
        .pipe(
            ofType(loginStart),
            mergeMap(( action )=> this.authService.login(action.email,action.password)
            .pipe(
                map(response => ({type: loginSuccess, payload: response}), 
                catchError(()=> EMPTY))
            )
            )
        )
    })
    
   
}
                

