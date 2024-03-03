import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/interfaces';
import { AlertService } from 'src/app/services/alert.service';
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

  constructor(
    private postService: PostService,
    private alertService: AlertService
  ) {

  }

  RemovePost(id: any) {
    if (id) {
      this.delPostsSub = this.postService.remove(id).subscribe(() => {
        this.fillAllPosts()
        this.alertService.danger('Post deleted!')
      })

    }
  }

  ngOnInit(): void {
    this.fillAllPosts()
  }

  fillAllPosts() {
    this.getPostsSub = this.postService.getAllPosts().subscribe((posts) => {

      this.posts = posts

    })
  }

  ngOnDestroy(): void {
    this.getPostsSub ? this.getPostsSub.unsubscribe() : ""
    this.delPostsSub ? this.delPostsSub.unsubscribe() : ""
  }


}
