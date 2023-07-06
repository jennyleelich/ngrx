import { createAction, props } from "@ngrx/store";
import { PostList } from "./posts.state";

export const AddPost = createAction('[posts page] add post', props<{post:PostList}>());
export const UpdatePost = createAction('[posts page] update post', props<{post: PostList}>())