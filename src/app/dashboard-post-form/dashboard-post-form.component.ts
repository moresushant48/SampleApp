import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { FormBuilder } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-dashboard-post-form',
  templateUrl: './dashboard-post-form.component.html',
  styleUrls: ['./dashboard-post-form.component.css']
})
export class DashboardPostFormComponent implements OnInit {

  isLoggedIn: boolean = false;
  userRole: string = "norole";

  constructor(
    private fb: FormBuilder,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorage.getToken();
    if(this.isLoggedIn){
      this.userRole = this.tokenStorage.getUser().roles;
    }

    this.requestData();

  }

  requestData() {

    $('#tblPrograms').DataTable({
      dom: 'ftip',
      ajax: {
        url: "http://localhost:9090/api/posts/get/programs",
        type: "GET",
        dataType: "json",
        crossDomain: true,
        beforeSend: function (xhr) {
          xhr.setRequestHeader("Authorization", "Bearer " + new TokenStorageService().getToken());
        },
        error: function (jqXHR, textStatus, errorThrown) {}
      },
      "sAjaxDataProp": "",
      "order": [0, "desc"],
      "columnDefs": [{ targets: 3, sortable: false }],
      "aoColumns": [
        { "mData": "postId" },
        { "mData": "postTitle" },
        { "mData": "postMetaTitle" },
        { "mData": "postSummary" },
        { "mData": "postPublished" }
      ],
      "language": {
        "emptyTable": "You don't have any articles."
      }
    });

    $('#tblEvents').DataTable({
      dom: 'ftip',
      ajax: {
        url: "http://localhost:9090/api/posts/get/events",
        type: "GET",
        dataType: "json",
        crossDomain: true,
        beforeSend: function (xhr) {
          xhr.setRequestHeader("Authorization", "Bearer " + new TokenStorageService().getToken());
        },
        error: function (jqXHR, textStatus, errorThrown) {}
      },
      "sAjaxDataProp": "",
      "order": [0, "desc"],
      "columnDefs": [{ targets: 3, sortable: false }],
      "aoColumns": [
        { "mData": "postId" },
        { "mData": "postTitle" },
        { "mData": "postMetaTitle" },
        { "mData": "postSummary" },
        { "mData": "postPublished" }
      ],
      "language": {
        "emptyTable": "You don't have any articles."
      }
    });

  }

  newPost() {
    
  }

  pending() {

  }

}

class PostForm {
  postTitle: string;
  postMetaTitle: string;
  postSummary: string;
  postPublished: boolean;
  postContent: string;
}