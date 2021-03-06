import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  adminLoginForm: FormGroup;
  isLoggedIn: boolean = false;
  message = "";

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.message = "You're already Logged In.";
      $('input:submit').hide();
    }
    this.serveForm();
  }

  serveForm() {
    this.adminLoginForm = this.fb.group({
      email: '',
      password: ''
    })
  }

  login(user: LoginData) {
    this.authService.login(user).subscribe(data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);

      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    },
      error =>
        this.message = "Wrong Credentials."
    )
  }

}

export class LoginData {
  email: string;
  password: string;
}