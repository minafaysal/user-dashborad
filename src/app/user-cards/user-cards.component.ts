import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { ApiService } from '../shared/service/api.service';
import { USER } from '../shared/models/common.models';
import { ComponentBase } from '../shared/base/common.base';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/service/user-data.service';

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
    private userDataService: UserDataService,
    private toastr: ToastrService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.userDataService.getSearchKey().subscribe((key) => {
      if (key !== null) {
        this.searchKey = key.toString();
      }
    });

    const storedUserList = this.userDataService.getUserList().value;
    if (storedUserList && storedUserList.length > 0) {
      this.userList = storedUserList;
      this.isLoading = false;
    } else {
      this.apiService
        .getUsers()
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (res) => {
            this.userList = res.data;
            this.userDataService.setUserList(this.userList);
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
  }

  goToUserDetails(userId: number): void {
    this.router.navigate(['/user-details', userId]);
  }
}
