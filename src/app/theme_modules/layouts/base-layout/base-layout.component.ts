import { Component, OnDestroy } from '@angular/core';
import {
  NbMenuService,
  NbThemeService,
  NbMediaBreakpointsService,
  NbSidebarService,
} from '@nebular/theme';
import { takeWhile } from 'rxjs';
import { StateService } from 'src/app/core/utils/state.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnDestroy {
  layout: any = {};
  sidebar: any = {};
  dsaf: any = {};
  private alive = true;

  currentTheme: string | undefined;

  constructor(
    protected stateService: StateService,
    protected menuService: NbMenuService,
    protected themeService: NbThemeService,
    protected bpService: NbMediaBreakpointsService,
    protected sidebarService: NbSidebarService
  ) {
    this.stateService
      .onLayoutState()
      .pipe(takeWhile(() => this.alive))
      .subscribe((layout: string) => (this.layout = layout));

    this.stateService
      .onSidebarState()
      .pipe(takeWhile(() => this.alive))
      .subscribe((sidebar: string) => {
        this.sidebar = sidebar;
      });

    // const isBp = this.bpService.getByName('is');
    // this.menuService
    //   .onItemSelect()
    //   .pipe(
    //     takeWhile(() => this.alive),
    //     withLatestFrom(this.themeService.onMediaQueryChange()),
    //     delay(20)
    //   )
    //   .subscribe(
    //     ([item, [bpFrom, bpTo]]: [
    //       any,
    //       [NbMediaBreakpoint, NbMediaBreakpoint]
    //     ]) => {
    //       if (bpTo.width <= isBp.width) {
    //         this.sidebarService.collapse('menu-sidebar');
    //       }
    //     }
    //   );

    this.themeService
      .getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe((theme) => {
        this.currentTheme = theme.name;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
