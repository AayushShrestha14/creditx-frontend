import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent {
  @Input() title: string | undefined;
  @Input() type: string | undefined;
  @Input() detail: string | undefined;

  constructor() {}
}
