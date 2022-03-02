import { Component, OnInit } from '@angular/core';
import {
  Validators,
  AbstractControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  btnStatus: string = 'Sign In';

  loginForm: FormGroup = new FormGroup({});

  submitted: boolean = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: [
        null,
        Validators.compose([Validators.required, Validators.minLength(2)])
      ],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(8)])
      ]
    });
  }

  get form(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onUserLogin(loginDetails: any) {
    this.btnStatus = 'Processing';
    if (this.loginForm.valid) {
      this.submitted = true;
      this.authService.authenticate(loginDetails.username, loginDetails.password).subscribe((response: any) => {
        console.log(response);
      }, (error: any) => {
        console.error(error);
      });
    }
  }
}
