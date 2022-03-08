import {Component, Input, OnInit} from '@angular/core';
import {ValuatorResponse} from "../../models/valuator-response.model";

@Component({
  selector: 'app-table-action',
  templateUrl: './table-action.component.html',
  styleUrls: ['./table-action.component.scss']
})
export class TableActionComponent implements OnInit {
  @Input() responseDetails: ValuatorResponse = new ValuatorResponse();

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
