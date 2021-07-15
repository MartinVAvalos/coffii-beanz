import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // signupForm: FormGroup
  signupForm = new FormGroup({
    'username': new FormControl(""),
    'email': new FormControl(""),
    'password': new FormControl("")
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    let username, email, password
    if(this.signupForm.value) {
        ({ username, email, password } = this.signupForm.value)
    }
    console.log(username);
  }

}
