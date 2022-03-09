import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor(
    private activeModel: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.activeModel.dismiss();
  }

}
