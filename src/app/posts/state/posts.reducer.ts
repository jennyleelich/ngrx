import { Action, createReducer, on } from "@ngrx/store"
import { PostsState, initialState } from "./posts.state"
import { AddPost, DeletePost, UpdatePost } from "./posts.actions"

const _postsReducer = createReducer(initialState, 
    on(AddPost, (state, action)=> {
        let post = {...action.post};
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(UpdatePost,(state, action) => {
        // update array immutable with map
        const updatedPosts = state.posts.map(post => {
            return action.post.id === post.id ? action.post : post;
        })
        return {
            ...state,
            posts: updatedPosts
        }
    }),
    on(DeletePost,(state, action) => {
        // update array immutable with map
        const updatedPosts = state.posts.filter(post => {
            return post.id !== action.post.id
        })
        return {
            ...state,
            posts: updatedPosts
        }
    })



)
export function postsReducer(state: PostsState | undefined, action: Action) {
    return _postsReducer(state, action)
}