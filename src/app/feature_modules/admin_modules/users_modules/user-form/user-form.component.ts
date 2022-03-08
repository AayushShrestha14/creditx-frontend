import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(
    private activeModel: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.activeModel.dismiss();
  }
}
