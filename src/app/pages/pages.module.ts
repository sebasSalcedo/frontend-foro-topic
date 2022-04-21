import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component'


import { PagesRoutingModule } from './pages-routing.module'


@NgModule({
  declarations: [
    NavbarComponent,
  ],
  exports:[
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
