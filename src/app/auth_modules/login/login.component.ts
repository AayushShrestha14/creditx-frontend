import { Component, OnInit } from '@angular/core';
import {
  Validators,
  AbstractControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageUtil } from 'src/app/core/utils/local-storage-util';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  btnStatus: string = 'Sign In';

  errorMessage: string = '';
  
  loginForm: FormGroup = new FormGroup({});

  submitted: boolean = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
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
        Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });
  }

  get form(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onUserLogin(loginDetails: any) {
    if (this.loginForm.valid) {
      this.submitted = true;
      this.btnStatus = 'Please Wait ...';
      this.authService.authenticate(loginDetails.username, loginDetails.password).subscribe(
        {
          next: (loginResponse) => {
            const storage = LocalStorageUtil.getStorage();
            storage.at = loginResponse.access_token;
            storage.rt = loginResponse.refresh_token;
            storage.ty = loginResponse.token_type;
            storage.et = loginResponse.expires_in;
            storage.roles = loginResponse.roles;
            storage.username = loginResponse.username;
            LocalStorageUtil.setStorage(storage);
            this.router.navigate(['/home/dashboard']);
          },
          error: (error) => {
            this.submitted = false;
            this.btnStatus = 'Sign In';
            this.errorMessage = error.error.message;
            console.error(error);
          },
          complete: () => {}
        }
      );
    }
  }
}
