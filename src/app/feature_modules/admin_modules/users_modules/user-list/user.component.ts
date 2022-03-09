import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserFormComponent} from '../user-form/user-form.component';
import {UserEditComponent} from '../user-edit/user-edit.component';
import {Pageable} from '../../../../core/common/services/common-pageable';
import {PaginationUtils} from '../../../../core/utils/PaginationUtils';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList: Array<any> = [];
  dataList: Array<any> = [];



  filterFlag: boolean = true;
  page = 1;

  search: any = {
    name: undefined,
    branchIds: undefined,
    userId: undefined,
    status: undefined
  };
  pageable: Pageable = new Pageable();

  filterForm: FormGroup = new FormGroup({});

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
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

  static loadData(other: UserComponent) {
    other.userService.getPaginationWithSearchObject(other.search, other.page, 10).subscribe((response: any) => {
      console.log(response);
      other.dataList = response.detail.content;

      other.pageable = PaginationUtils.getPageable(response.detail);

    });

  }

  add() {
    const modalRef = this.modalService.open(UserFormComponent, {size: 'lg', backdrop: 'static'});
  }

  edit() {
    const modalRef = this.modalService.open(UserEditComponent, {size: 'lg'})
  }

  buildFilterForm() {
    this.filterForm = this.formBuilder.group({
      name: [undefined],
      branch: [undefined],
      role: [undefined],
      activeStatus: [undefined]
    });
  }
}
