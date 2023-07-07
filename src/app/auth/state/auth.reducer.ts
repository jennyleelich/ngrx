import { Action, createReducer } from "@ngrx/store";
import { AuthState, initialState } from "./auth.state";

const _AuthReducer = createReducer(initialState)

export function AuthReducer(state: AuthState | undefined, action: Action) {
    return _AuthReducer(state,action);
}



