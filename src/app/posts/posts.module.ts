import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducer';

const PostRoute: Routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      {
      path:'add',
      component: AddPostComponent
    },
    {
      path:'edit/:id',
      component: EditPostComponent
    }
    ]
  }
]

@NgModule({
  declarations: [
    EditPostComponent,
    PostsListComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PostRoute),
    ReactiveFormsModule,
    StoreModule.forFeature('posts',postsReducer)
  ]
 
})
export class PostsModule { }
