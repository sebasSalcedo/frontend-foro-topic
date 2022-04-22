import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    name: [
      '',
      {
        validators: [Validators.required, Validators.minLength(4)],
        
      },
    ],
    surname: [
      '',
      {
        Validators: [Validators.required],
      },
    ],
    email: [
      '',
      {
        Validators: [Validators.required, Validators.email],
      },
    ],
    password: [
      '',
      {
        Validators: [Validators.required, Validators.minLength(8)],
      },
    ],
    role :['ROLE_USER',{}]

  });

  constructor(private fb: FormBuilder, private userService:UserService) {}

  ngOnInit(): void {}

  public registerNewUser() {
    let userData = this.registerForm.value
   
    this.userService.userRegister(userData).subscribe( 

      res =>{

        console.log(res);

      },err =>{
        console.log(err);
      }

    ) ;
 
  }

  public validatorEmailExists() {
    console.log('entra a validar');
  }
}
