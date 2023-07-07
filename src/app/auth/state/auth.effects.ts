import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { LoginService } from "../login/login.service";
import { loginAction } from "./auth.action";
import { pipe, ofType } from "rxjs/operators";
@Injectable()
export class AuthEffects{
    constructor(private loginService: LoginService, private action$: Action) {

    }
    checkAuth$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginAction),
            mergeMap((action) => {
                return this.loginService
                .login()
                .pipe(map(data)=> loginSuccess({data}))
            })
            )
    })
}

function createEffect(arg0: () => any) {
    throw new Error("Function not implemented.");
}
