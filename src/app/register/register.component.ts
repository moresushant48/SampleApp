import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare var $ : any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.blankForm();
  }

  blankForm(){
    this.registerForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      mobileno: '',
      password: ''
    })
  }

  register(volunteer : Volunteer) {
  
    $("#result").addClass("alert alert-warning")
      .html("Processing...");
    
    this.http.post('http://localhost:9090/api/auth/signup', volunteer).subscribe(
      (response) => { 
        $("#result")
          .removeClass("alert-warning")
          .addClass("alert alert-success")
          .html("Registered Successfully.")
      },
      (error) => console.log(error)
    )
    
    this.blankForm();
  }
}

export class Volunteer {
  email: string;
  firstName: string;
  lastName: string;
  mobileno: string;
  password: string;
}
