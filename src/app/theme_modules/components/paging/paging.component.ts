import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pageable } from 'src/app/core/common/services/common-pageable';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent implements OnInit {
  @Input() pageable: Pageable = new Pageable();

  page = 1;

  @Output() changePage = new EventEmitter();

  constructor() {}

  pageChanged(page: number) {
    this.page = page;
    this.changePage.emit(this.page);
  }

  ngOnInit() {}
}
