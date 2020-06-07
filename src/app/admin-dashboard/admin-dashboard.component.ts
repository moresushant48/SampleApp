import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

declare var $: any; 

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {

  isLoggedIn: boolean = false;
  userRole: string = "norole";

  constructor(
    private tokenStorage: TokenStorageService
  ) {
    
  }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorage.getToken();
    if(this.isLoggedIn){
      this.userRole = this.tokenStorage.getUser().roles;
    }

    $('app-root > nav').hide();

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
