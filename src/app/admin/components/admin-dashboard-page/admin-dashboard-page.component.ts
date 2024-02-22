import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/interfaces';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-dashboard-page',
  templateUrl: './admin-dashboard-page.component.html',
  styleUrls: ['./admin-dashboard-page.component.scss']
})
export class AdminDashboardPageComponent implements OnInit, OnDestroy {


  onRemovePost(id: string | undefined) {

  }


  posts: Post[] = [];
  postsSub!: Subscription;

  constructor(private postService: PostService) {

  }


  ngOnInit(): void {
    this.postsSub = this.postService.getAllPostsForDS().subscribe((posts) => {

      this.posts = posts
      console.log("response from OnInint ", posts)
    })
  }

  ngOnDestroy(): void {
    this.postsSub ? this.postsSub.unsubscribe() : ""
  }


}
