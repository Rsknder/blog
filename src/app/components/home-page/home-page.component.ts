import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from 'src/app/interfaces/interfaces';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {


  posts$!: Observable<Post[]>;


  constructor(private postService: PostService) {

  }

  ngOnInit(): void {

    this.posts$ = this.postService.getAllPosts()

  }

}

