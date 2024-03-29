import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { ApiService } from '../shared/service/api.service';
import { User } from '../shared/models/common.models';
import { ComponentBase } from '../shared/base/common.base';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss'],
})
export class UserCardsComponent extends ComponentBase implements OnInit {
  userList: User[] = [];
  isLoading: boolean = true;
  constructor(private apiService: ApiService, private toastr: ToastrService) {
    super();
  }

  ngOnInit() {
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
}
