import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _auth: AuthService, private router: Router) {}

  public logout(): void {
    this._auth.logout().subscribe(data => {
      this.router.navigateByUrl('login')
    })
  }
}
