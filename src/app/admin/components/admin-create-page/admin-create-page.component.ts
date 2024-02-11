import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-admin-create-page',
  templateUrl: './admin-create-page.component.html',
  styleUrls: ['./admin-create-page.component.scss']
})
export class AdminCreatePageComponent implements OnInit {

  form!: FormGroup;


  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl("", Validators.required),
      text: new FormControl("", Validators.required),
      author: new FormControl("", Validators.required)
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const post: Post = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date(),
    }
    console.log(post)
  }

}
