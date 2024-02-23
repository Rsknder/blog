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


  searchString: string = "";
  posts: Post[] = [];
  getPostsSub!: Subscription;
  delPostsSub!: Subscription;

  constructor(private postService: PostService) {

  }

  onRemovePost(id: any) {
    if (id) {
      this.delPostsSub = this.postService.remove(id).subscribe(() => {
        this.fillAllPosts()
      })

    }
  }

  ngOnInit(): void {
    this.fillAllPosts()
  }

  fillAllPosts() {
    this.getPostsSub = this.postService.getAllPostsForDS().subscribe((posts) => {

      this.posts = posts
      console.log("response from OnInint ", posts)
    })
  }

  ngOnDestroy(): void {
    this.getPostsSub ? this.getPostsSub.unsubscribe() : ""
    this.delPostsSub ? this.delPostsSub.unsubscribe() : ""
  }


}
