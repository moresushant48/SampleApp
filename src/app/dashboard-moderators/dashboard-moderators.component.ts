import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

declare var $: any;

@Component({
  selector: 'app-dashboard-moderators',
  templateUrl: './dashboard-moderators.component.html',
  styleUrls: ['./dashboard-moderators.component.css']
})
export class DashboardModeratorsComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

    this.feedTable();
  }

  feedTable() {

    $('#tblMods').DataTable({
      dom: 'Bfrltip',
      ajax: {
        url: "http://localhost:9090/api/admin/get/mods",
        type: "GET",
        dataType: "json",
        crossDomain: true,
        beforeSend: function (xhr) {
          xhr.setRequestHeader("Authorization", "Bearer " + new TokenStorageService().getToken());
        }
      },
      "sAjaxDataProp": "",
      "order": [0, "desc"],
      "columnDefs": [{ targets: [3, 4], sortable: false }],
      "aoColumns": [
        { "mData": "id" },
        { "mData": "firstName" },
        { "mData": "lastName" },
        { "mData": "mobileno" },
        { "mData": "email" },
      ]
    });

  }
}
