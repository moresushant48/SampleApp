import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dashboard-volunteers',
  templateUrl: './dashboard-volunteers.component.html',
  styleUrls: ['./dashboard-volunteers.component.css']
})
export class DashboardVolunteersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $('#tblVol').DataTable({
      dom: 'Bfrltip',
      "sAjaxSource": "http://localhost:9090/api/get/volunteers",
      "sAjaxDataProp": "",
      "order": [0, "desc"],
      "columnDefs": [{ targets: 5, sortable: false }],
      "aoColumns": [
        { "mData": "vId" },
        { "mData": "vFirstName" },
        { "mData": "vLastName" },
        { "mData": "vMobileNo" },
        { "mData": "vEmailId" },
        { "mData": "vAddress" },
      ]
    });

  }

}
