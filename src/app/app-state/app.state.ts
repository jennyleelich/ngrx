import { AuthReducer } from "../auth/state/auth.reducer";
import { AuthState } from "../auth/state/auth.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostsState } from "../posts/state/posts.state";

export interface AppState {
    counter: CounterState;
    posts: PostsState;
    auth: AuthState;
}

export const AppReducer = {
    counter: counterReducer,
    posts: postsReducer,
    auth: AuthReducer
}