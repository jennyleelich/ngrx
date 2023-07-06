import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state/app.state';
import { getPostById } from '../state/posts.selector';
import { PostList } from '../state/posts.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy{
 selectedId: string | null | undefined;
 selectedPost: PostList | undefined;
 postForm: FormGroup | undefined;
  constructor(private activatedRoute: ActivatedRoute, private store: Store<AppState>){

  }
  postSubscription: Subscription | undefined;
  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe(params => {
      this.selectedId = params.get('id');
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

  }

  ngOnDestroy(): void {
    this.postSubscription?.unsubscribe();
  }
}
