import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public showError: boolean = false;

  constructor(
    private _auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public submit(e: Event): void {
    if (this.loginForm.valid) {
      const loginValue = this.loginForm.value;

      this._auth.login(loginValue.username, loginValue.password).subscribe(
        (data) => {
          this.router.navigateByUrl('calculator')
        },
        (error) => {
          this.showError = true;
        }
      );
    }
  }
}
