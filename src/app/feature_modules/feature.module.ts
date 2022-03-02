import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard_modules/dashboard/dashboard.component';
import { FeatureModulesComponent } from './feature-modules.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { ThemeModule } from '../theme_modules/theme.module';



@NgModule({
  declarations: [
    FeatureModulesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ThemeModule.forChild(),
  ]
})
export class FeatureModule { }
