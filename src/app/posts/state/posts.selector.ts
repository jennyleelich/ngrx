import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostList, PostsState } from "./posts.state";
import { AppState } from "src/app/app-state/app.state";

const getPostsState = createFeatureSelector<PostsState>('posts');
export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
})

export const getPostById = (props: {id: string})=> createSelector(getPostsState, (state:PostsState) => {
    // console.log(props);
    // console.log(state.posts);
    return state.posts.find((post:PostList) => post.id === props.id);
})
