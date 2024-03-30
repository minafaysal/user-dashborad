import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { USER } from '../models/common.models';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userListSubject: BehaviorSubject<USER[]> = new BehaviorSubject<
    USER[]
  >([]);
  private searchKeySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  constructor() {}

  setUserList(userList: USER[]): void {
    this.userListSubject.next(userList);
  }

  getUserList(): BehaviorSubject<USER[]> {
    return this.userListSubject;
  }

  setSearchKey(searchKey: string): void {
    this.searchKeySubject.next(searchKey);
  }

  getSearchKey(): BehaviorSubject<string> {
    return this.searchKeySubject;
  }
}
