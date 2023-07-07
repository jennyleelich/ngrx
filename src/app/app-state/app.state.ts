import { AuthReducer } from "../auth/state/auth.reducer";
import { AuthState } from "../auth/state/auth.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostsState } from "../posts/state/posts.state";
import { SharedReducer } from "../shared/state/shared.reducer";
import { SHARED_STATE_NAME } from "../shared/state/shared.selectors";
import { SharedState } from "../shared/state/shared.state";

export interface AppState {
   [SHARED_STATE_NAME]: SharedState
}

export const AppReducer = {
    [SHARED_STATE_NAME]: SharedReducer
}