import { Action, createReducer, on } from "@ngrx/store";
import { SharedState, initialState } from "./shared.state";
import { setErrorMessage, setLoadingSpinner} from "./share.actions";

const _SharedReducer = createReducer(initialState, 
    on(setLoadingSpinner, (state, action) => {
        return {
            ...state,
            showLoading: action.status
        }
    }),
    on(setErrorMessage, (state, action) => {
        return {
            ...state,
            showErrorMessage: action.message
        }
    })
)
export function SharedReducer(state: SharedState | undefined,action: Action) {
    return _SharedReducer(state, action);
}