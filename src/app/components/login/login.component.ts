import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      },
    ],
    userPassword: [
      '',
      {
        Validators: [Validators.required, Validators.minLength(8)],
      },
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  public login() {
    console.log(this.loginForm.value);
  }
}
