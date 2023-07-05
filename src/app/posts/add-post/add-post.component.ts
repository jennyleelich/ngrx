import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state/app.state';
import { AddPost } from '../state/posts.actions';
import { PostList } from '../state/posts.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{
  postForm: FormGroup | undefined;
  constructor(private store:Store<AppState>) {

  }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null,[Validators.required, Validators.minLength(10)])
    })
  }

  onAddPost() {
    console.log(this.postForm?.value);
    const post: PostList = this.postForm?.value;
    if(!this.postForm?.valid) {
      return;
    }else {
      this.store.dispatch(AddPost({post}))
    }
  }

}
