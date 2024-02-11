import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup;
  isSubmited = false
  message: string | undefined

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginRequired']) {
        this.message = "Please authorize!"
      }
    }

    )

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    if (this.auth.isAuth() === true) {
      this.router.navigate(['/admin', 'dashboard'])
    }

  }

  submit() {
    if (this.form.invalid) {
      return
    }
    this.isSubmited = true
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    }
    this.auth.login(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard'])
      this.isSubmited = false
    }, () => {
      this.isSubmited = false
    })
  }


}