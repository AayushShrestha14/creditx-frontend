import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-action',
  templateUrl: './header-action.component.html',
  styleUrls: ['./header-action.component.scss']
})
export class ValuatorHeaderActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.onNewAdd();
  }
  onNewAdd() {
    console.log('on new data added!!!');
  }
}
