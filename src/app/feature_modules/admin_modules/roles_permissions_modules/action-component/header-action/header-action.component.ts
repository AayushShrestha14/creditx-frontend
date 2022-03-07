import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-action',
  templateUrl: './header-action.component.html',
  styleUrls: ['./header-action.component.scss']
})
export class HeaderActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNewAdd() {
    console.log('on new data add');
  }

}
