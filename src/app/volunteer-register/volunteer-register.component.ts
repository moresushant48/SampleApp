import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare var $ : any;

@Component({
  selector: 'app-volunteer-register',
  templateUrl: './volunteer-register.component.html',
  styleUrls: ['./volunteer-register.component.css']
})

export class VolunteerRegisterComponent implements OnInit {

  volunteerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.blankForm();
  }

  blankForm(){
    this.volunteerForm = this.fb.group({
      vFirstName: '',
      vLastName: '',
      vEmailId: '',
      vMobileNo: '',
      vAddress: ''
    })
  }

  registerVolunteer(volunteer : Volunteer) {
    
    $("#result").html("Processing...");

    this.blankForm();
    
    this.http.post('http://localhost:9090/api/post/volunteer', volunteer).subscribe(
      (response) => $("#result").html("Registered Succefully."),
      (error) => console.log(error)
    ) 
  }
}

export class Volunteer {
  vFirstName: string;
  vLastName: string;
  vEmailId: string;
  vMobileNo: string;
  vAddress: string;
}
