import { Action, createReducer, on } from "@ngrx/store"
import { PostsState, initialState } from "./posts.state"
import { AddPost } from "./posts.actions"

const _postsReducer = createReducer(initialState, 
    on(AddPost, (state, action)=> {
        let post = {...action.post};
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post]
        }
    })



)
export function postsReducer(state: PostsState | undefined, action: Action) {
    return _postsReducer(state, action)
}