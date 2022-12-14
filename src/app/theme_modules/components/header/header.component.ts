import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NbSidebarService, NbMenuService } from '@nebular/theme';
import { LayoutService } from 'src/app/core/utils/layout.service';
import { LocalStorageUtil } from 'src/app/core/utils/local-storage-util';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  static LOGOUT = 'Sign Out';
  static PROFILE = 'View Profile Details';
  static CHANGE_PASSWORD = 'Change Password';
  contextMenuTag = 'user-context-menu';

  @Input() position = 'normal';

  userId: number | undefined;
  userFullName: string | any;
  username: string = '';
  userProfilePicture: any;

  userMenu: Array<any> = [
    {
      title: HeaderComponent.PROFILE,
      icon: 'person-done-outline',
      handler: () => {}
    },
    {
      title: HeaderComponent.CHANGE_PASSWORD,
      icon: 'refresh-outline',
      handler: () => {}
    },
    {
      title: HeaderComponent.LOGOUT,
      icon: 'log-out-outline',
      handler: () => {
        this.onSignOut();
      }
    }
  ];

  notificationCount: any;

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private router: Router,
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    // todo
    // this.userFullName = 'Kalathoki Paribartan';
    const localStorageDetails = LocalStorageUtil.getStorage();
    this.userFullName = localStorageDetails.username;

    // this.headerMenu();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  // headerMenu(): void {
  //   this.menuService
  //     .onItemClick()
  //     .pipe(
  //       filter(({ tag }) => tag === this.contextMenuTag),
  //       map(({ item: { title } }) => title),
  //       filter(
  //         (title) =>
  //           title === HeaderComponent.LOGOUT ||
  //           title === HeaderComponent.PROFILE ||
  //           title === HeaderComponent.CHANGE_PASSWORD
  //       )
  //     )
  //     .subscribe((value) => {
  //       if (value === HeaderComponent.LOGOUT) {
  //         LocalStorageUtil.clearStorage();
  //         this.router.navigate(['/auth/login']);
  //       } else if (value === HeaderComponent.PROFILE) {
  //       } else if (value === HeaderComponent.CHANGE_PASSWORD) {
  //       }
  //     });
  // }

  onSignOut(): void {
    LocalStorageUtil.clearStorage();
    this.router.navigate(['/auth/login']);
  }
}
