import { Component, Input, OnInit } from '@angular/core';
import { RolesPermissionsResponse } from '../../models/roles-permission-response.model';

@Component({
  selector: 'app-roles-action',
  templateUrl: './roles-action.component.html',
  styleUrls: ['./roles-action.component.scss']
})
export class RolesActionComponent implements OnInit {

  @Input() responseDetails: RolesPermissionsResponse = new RolesPermissionsResponse();
  
  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    console.log('on edit records: ', this.responseDetails);
  }

  onDelete(): void {
    console.log('on delete records: ', this.responseDetails);
  }

}
