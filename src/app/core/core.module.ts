import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './layout/base/base.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    LoginComponent,
    BaseComponent,
    HeaderComponent
  ],
  exports: [LoginComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
