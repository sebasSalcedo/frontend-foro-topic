import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public identity: any;

  loginForm = this.fb.group({
    email: [
      '',
      {
        validators: [
          Validators.required,
          Validators.email,
          Validators.minLength(4),
        ],
        updateOn: 'blur',
      },
    ],
    password: [
      '',
      {
        Validators: [Validators.required, Validators.minLength(8)],
      },
    ],
  });

  constructor(private fb: FormBuilder, private userService: UserService,private _router: Router) {}

  ngOnInit(): void {}

  public login() {
    this.userService.loginUser(this.loginForm.value).subscribe(
      (res) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Nuevo inicio de Sesion',
          showConfirmButton: false,
          timer: 1500,
        });


        localStorage.setItem('token', res.token);
        localStorage.setItem('identity', JSON.stringify(res.user));

        this._router.navigate(['/home']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Datos incorrectos!!!!',
        });
      }
    );
  }
}
