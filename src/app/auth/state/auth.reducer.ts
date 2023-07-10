import { Action, createReducer, on } from "@ngrx/store";
import { AuthState, initialState } from "./auth.state";
import { loginFail, loginSuccess, signupSuccess } from "./auth.action";

const _AuthReducer = createReducer(initialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(loginFail, (state) => {
        return {
            ...state,
           
        }
    }),
    on(signupSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    })
    )

export function AuthReducer(state: AuthState | undefined, action: Action) {
    return _AuthReducer(state,action);
}



