import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbProgressBarModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbStepperModule,
  NbButtonModule,
  NbListModule,
  NbToastrModule,
  NbInputModule,
  NbAccordionModule,
  NbDatepickerModule,
  NbDialogModule,
  NbWindowModule,
  NbAlertModule,
  NbSpinnerModule,
  NbRadioModule,
  NbSelectModule,
  NbTooltipModule,
  NbCalendarKitModule,
  NbIconModule,
  NbToggleModule,
  NbBadgeModule,
  NbThemeModule,
  DEFAULT_THEME,
  COSMIC_THEME,
  CORPORATE_THEME,
  DARK_THEME
} from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { IconCardComponent } from '../core/common/components/icon-card/icon-card.component';
import { ComponentloaderDirective } from '../core/directives/componentloader.directive';
import { PipesModule } from '../core/pipes/pipes.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PagingComponent } from './components/paging/paging.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';

const BASE_MODULES: Array<any> = [
  NgbModule,
  NgxPaginationModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  PipesModule,
  NgSelectModule
];

const NB_MODULES: Array<any> = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbProgressBarModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbStepperModule,
  NbButtonModule,
  NbListModule,
  NbToastrModule,
  NbInputModule,
  NbAccordionModule,
  NbDatepickerModule,
  NbDialogModule,
  NbWindowModule,
  NbAlertModule,
  NbSpinnerModule,
  NbRadioModule,
  NbSelectModule,
  NbTooltipModule,
  NbCalendarKitModule,
  NbIconModule,
  NbToggleModule,
  NbEvaIconsModule,
  NbBadgeModule,
  NbLayoutModule,
  NbEvaIconsModule,
  NbCardModule
];

const COMPONENTS: Array<any> = [
  HeaderComponent,
  FooterComponent,
  BaseLayoutComponent,
  PagingComponent,
  IconCardComponent
];

const ENTRY_COMPONENTS: Array<any> = [];

const PIPES: Array<any> = [];

const DIRECTIVES: Array<any> = [
  ComponentloaderDirective
];

const NB_THEME_PROVIDERS = [
  NbThemeModule.forRoot(
    {
      name: 'default'
    },
    [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]
  ).providers,
  NbSidebarModule.forRoot().providers,
  NbMenuModule.forRoot().providers,
  NbDatepickerModule.forRoot().providers,
  NbDialogModule.forRoot().providers,
  NbWindowModule.forRoot().providers,
  NbToastrModule.forRoot().providers
];

@NgModule({
  imports: [CommonModule, ...BASE_MODULES, ...NB_MODULES, RouterModule],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES, ...DIRECTIVES],
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return <ModuleWithProviders<ThemeModule>>{
      ngModule: ThemeModule,
      providers: [NB_THEME_PROVIDERS]
    };
  }

  static forChild(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [NB_THEME_PROVIDERS]
    };
  }
}
