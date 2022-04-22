import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsRoutingModule } from './components-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'




@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    
  ],
  imports: [
    ComponentsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class ComponentsModule { }
