import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state/app.state';
import { PostList } from '../state/posts.state';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{
  public postList$!: Observable<PostList[]>
  constructor(private store: Store<AppState>){

  }
  ngOnInit(): void {
    this.postList$ = this.store.select(getPosts);
  }
}
