import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { USER, USERDETAILSDATA, USERSDATA } from '../models/common.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private searchKeySubject: BehaviorSubject<number | null> =
  //   new BehaviorSubject<number | null>(null);
  private userListSubject: BehaviorSubject<USER[]> = new BehaviorSubject<
    USER[]
  >([]);
  private searchKeySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<USERSDATA> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = { headers: headers };

    return this.http.get<USERSDATA>(
      'https://reqres.in/api/users?page=2',
      options
    );
  }

  fetchUserDetails(userId: number): Observable<USERDETAILSDATA> {
    if (userId) {
      return this.http.get<USERDETAILSDATA>(
        `https://reqres.in/api/users/${userId}`
      );
    } else {
      throw new Error('User ID is required.');
    }
  }

  // setSearchKey(key: number): void {
  //   this.searchKeySubject.next(key);
  // }

  // getSearchKey(): BehaviorSubject<number | null> {
  //   return this.searchKeySubject;
  // }
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
