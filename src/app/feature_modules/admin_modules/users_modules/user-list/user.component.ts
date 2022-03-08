import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import { FormGroup } from '@angular/forms';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserFormComponent} from "../user-form/user-form.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList: Array<any> = [];
  filterFlag: boolean = true;

  filterForm: FormGroup = new FormGroup({});

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit(): void {
    this.listAllUser();
  }

  listAllUser(): void {
    this.userService.getAll(false).subscribe((response) => {
        this.userList = response?.detail;
        console.log('Response=>',this.userList);
      })
  }

  add() {
    const modalRef = this.modalService.open(UserFormComponent, {size: 'lg', backdrop: 'static'});
  }
}
