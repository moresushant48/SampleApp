import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  firstImage = "";
  images = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<String[]>("http://localhost:9090/api/get/store").subscribe(
      (response) => {
        let isFirst = true;

        response.forEach(element => {

          let imageURL = "http://localhost:9090/api/get/storage/" + element
          if(!isFirst)
            this.images.push(imageURL);
          else {
            this.firstImage = imageURL;
            isFirst = false;
          }
        });
      },
      (error) => console.log(error)
    )

  }

}
