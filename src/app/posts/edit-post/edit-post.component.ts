import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state/app.state';
import { getPostById } from '../state/posts.selector';
import { PostList } from '../state/posts.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UpdatePost } from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy{
 selectedId: string ='';
 selectedPost: PostList | undefined;
 postForm: FormGroup | undefined;
  constructor(private activatedRoute: ActivatedRoute, private store: Store<AppState>, private router: Router){

  }
  postSubscription: Subscription | undefined;
  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe(params => {
      this.selectedId = params.get('id')!;
      this.postSubscription = this.store.select(getPostById({id :this.selectedId!}) ).subscribe((data)=> {
        this.selectedPost = data;
        this.createNewForm();
      })
    })
  }

  createNewForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.selectedPost?.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.selectedPost?.description,[Validators.required, Validators.minLength(10)])
    })
  }

  onEditPost() {
    const post: PostList = this.postForm?.value;
    const id = this.selectedId;
    post.id = this.selectedId;
    if(!this.postForm?.valid) {
      return;
    }else {
      this.store.dispatch(UpdatePost({post}));
      this.router.navigate(['/posts']);

    }
  }

  ngOnDestroy(): void {
    this.postSubscription?.unsubscribe();
  }
}
