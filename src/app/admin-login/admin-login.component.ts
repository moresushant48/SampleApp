import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  adminLoginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.token = sessionStorage.getItem("token");
    // sessionStorage.setItem("token", "");
    this.serveForm();
  }

  serveForm() {
    this.adminLoginForm = this.fb.group({
      email: '',
      password: ''
    })
  }

  login(user: LoginData) {

  }

}

export class LoginData {
  email: string;
  password: string;
}