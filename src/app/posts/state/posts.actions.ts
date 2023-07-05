import { createAction, props } from "@ngrx/store";
import { PostList } from "./posts.state";

export const AddPost = createAction('AddPost', props<{post:PostList}>());