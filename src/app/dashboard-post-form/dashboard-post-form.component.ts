import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from 'jquery';
import { error } from 'protractor';

declare var $: any;

@Component({
  selector: 'app-dashboard-post-form',
  templateUrl: './dashboard-post-form.component.html',
  styleUrls: ['./dashboard-post-form.component.css']
})
export class DashboardPostFormComponent implements OnInit {

  postForm: FormGroup;

  postResponse: string;
  isLoggedIn: boolean = false;
  userRole: string = "norole";
  pendingPosts = [];

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {

    this.blankPostForm()

    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      this.userRole = this.tokenStorage.getUser().roles;
    }

    this.requestData();

  }
  blankPostForm() {
    this.postForm = this.fb.group({
      postTitle: '',
      postMetaTitle: '',
      postSummary: '',
      postContent: '',
    });
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
        error: function (jqXHR, textStatus, errorThrown) { }
      },
      "sAjaxDataProp": "",
      "order": [0, "desc"],
      "columnDefs": [{ targets: 3, sortable: false }],
      "aoColumns": [
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
        error: function (jqXHR, textStatus, errorThrown) { }
      },
      "sAjaxDataProp": "",
      "order": [0, "desc"],
      "columnDefs": [{ targets: 3, sortable: false }],
      "aoColumns": [
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

  submitPostForm(post: PostForm) {
    post.postPublished = false;
    this.http.post('http://localhost:9090/api/posts/add', post).subscribe(
      (response) => {
        $('#postFormModal').modal('toggle');
        this.postResponse = response['message'];
        $("#postToast").toast("show");
      },
      (error) => console.log(error)
    )

  }

  pending() {
    this.pendingPosts = [];
    this.http.get<number[]>("http://localhost:9090/api/posts/get/unspecified").subscribe(
      data => {
        this.pendingPosts = data
      },
      error => console.error("There was an error fetching data : ", error)
    );

  }

  updatePending(index: number, postId: number) {

    this.http.patch("http://localhost:9090/api/posts/patch/"+ postId +"/" + $("#select"+index).val(), null).subscribe(
      (response) => {
        $("#btnUpdatePending"+index).html("<i class='fa fa-check'></i>")
        setTimeout(() => {
          $("#id"+index).remove();
        }, 1000);
      }
    )
  }

}

class PostForm {
  postTitle: string;
  postMetaTitle: string;
  postSummary: string;
  postPublished: boolean = false;
  postContent: string;
}

class PendingPosts {
  id: number;
}