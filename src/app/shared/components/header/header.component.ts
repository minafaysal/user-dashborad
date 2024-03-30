import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchKey: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  // onSearchKeyChange(): void {
  //   const searchKeyNumber = parseInt(this.searchKey, 10);

  //   if (!isNaN(searchKeyNumber)) {
  //     this.apiService.setSearchKey(searchKeyNumber);
  //   } else {
  //     console.error('Invalid search key entered:', this.searchKey);
  //   }
  // }

  onSearchKeyChange(): void {
    this.apiService.setSearchKey(this.searchKey);
  }
  isHomePage(): boolean {
    return this.router.url === '/user-cards';
  }
}
