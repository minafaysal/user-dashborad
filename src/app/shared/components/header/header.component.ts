import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../service/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchKey: string = '';

  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {}

  onSearchKeyChange(): void {
    this.userDataService.setSearchKey(this.searchKey);
  }
  isHomePage(): boolean {
    return this.router.url === '/user-cards';
  }
}
