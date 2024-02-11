import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-create-page',
  templateUrl: './admin-create-page.component.html',
  styleUrls: ['./admin-create-page.component.scss']
})
export class AdminCreatePageComponent {
  form!: FormGroup;

}
