import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonResourceRoutingModule } from './common-resource-routing.module';
import { CommonTableComponent } from './common-table/common-table.component';
import { ThemeModule } from '../theme_modules/theme.module';


@NgModule({
  declarations: [
    CommonTableComponent,
  ],
  imports: [
    CommonModule,
    CommonResourceRoutingModule,
    ThemeModule.forChild()
  ],
  exports: [CommonTableComponent],
})
export class CommonResourceModule { }
