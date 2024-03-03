import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-edit-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.scss']
})
export class AdminEditPageComponent implements OnInit, OnDestroy {
  post: Post | undefined
  form!: FormGroup;
  isSubmited = false;
  updateSub!: Subscription;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) {

  }
  ngOnInit(): void {



    this.route.params.subscribe((params: Params) => {
      this.postService.getPost(params['id']).subscribe((v) => {
        this.post = v
        this.post.id = params['id']


        this.form = new FormGroup({
          title: new FormControl(this.post.title, Validators.required),
          text: new FormControl(this.post.text, Validators.required)
        })


      })

    })

  }

  submit() {

    if (this.form.invalid) { return }

    this.isSubmited = true

    if (this.post?.author) {
      this.updateSub = this.postService.updatePost({
        title: this.form.value.title,
        text: this.form.value.text,
        author: this.post?.author,
        id: this.post?.id,
        date: this.post?.date
      }).subscribe(() => {
        this.isSubmited = false
        this.alertService.success("post updated!")
      })

    }


  }
  ngOnDestroy(): void {
    if (this.updateSub) { this.updateSub.unsubscribe() }
  }
}
