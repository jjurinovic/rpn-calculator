import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './layout/base/base.component';
import { HeaderComponent } from './layout/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    BaseComponent,
    HeaderComponent
  ],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CoreModule { }
