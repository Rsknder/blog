import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/interfaces/interfaces';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-edit-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.scss']
})
export class AdminEditPageComponent implements OnInit {
  post: Post | undefined
  form!: FormGroup;


  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {



    this.route.params.subscribe((params: Params) => {
      this.postService.getPost(params['id']).subscribe((v) => {
        this.post = v
        console.log("v:", v)

        this.form = new FormGroup({
          title: new FormControl(this.post.title, Validators.required),
          text: new FormControl(this.post.text, Validators.required),
          author: new FormControl(this.post.author, Validators.required)
        })


      })

    })

  }

  submit() {

  }
}
