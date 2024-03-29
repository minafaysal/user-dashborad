import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';
import { ComponentBase } from '../shared/base/common.base';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../shared/service/api.service';
import { User } from '../shared/models/common.models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent extends ComponentBase implements OnInit {
  userId: number | null = null;
  isLoading: boolean = true;
  userDetails: any;
  // userDetails: { email: ''; first_name: ''; last_name: ''; avatar: '' };

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private apiService: ApiService
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      if (this.userId) {
        this.fetchUserDetails(this.userId);
      }
    });
  }

  fetchUserDetails(userId: number) {
    this.apiService
      .fetchUserDetails(userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          console.log('res:', res.data);
          this.userDetails = res;
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
