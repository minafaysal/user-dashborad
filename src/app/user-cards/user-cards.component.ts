import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { ApiService } from '../shared/service/api.service';
import { USER} from '../shared/models/common.models';
import { ComponentBase } from '../shared/base/common.base';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss'],
})
export class UserCardsComponent extends ComponentBase implements OnInit {
  userList: USER[] = [];
  isLoading: boolean = true;
  searchKey: string = '';

  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.apiService.getSearchKey().subscribe((key) => {
      if (key !== null) {
        console.log('Search Key:', key);
      }
    });

    this.apiService
      .getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          this.userList = res.data;
          this.isLoading = false;
          this.toastr.success('API call successful!', 'Success');
        },
        (error) => {
          console.error('API call error:', error);
          this.toastr.error('API call failed!', 'Error');
          this.isLoading = false;
        }
      );
  }

  goToUserDetails(userId: number): void {
    this.router.navigate(['/user-details', userId]);
  }
}
