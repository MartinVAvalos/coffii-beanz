import { Component, OnInit } from '@angular/core';
// import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // public auth: AuthService
  constructor() {
    console.log()
   }

  ngOnInit(): void {
  }

  loginWithRedirect(): void {
    // this.auth.loginWithRedirect();
  }

}
