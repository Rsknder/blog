import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from 'src/app/interfaces/interfaces';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  posts: Post[] = []


  constructor(private postService: PostService) {

  }

  ngOnInit(): void {

    this.postService.getAll().subscribe((response) => {
      console.log("#response:", response)

      Object.keys(response).forEach((v, k) => {
        console.log(v, k)
        console.log(response[v])
        response[v].id = v
        this.posts.push(response[v])
      })

      console.log(this.posts)

    }
    )

  }

}
