import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  isLoggedIn: boolean = false;

  constructor(private tokenStorage: TokenStorageService) {
    
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorage.getToken();
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
