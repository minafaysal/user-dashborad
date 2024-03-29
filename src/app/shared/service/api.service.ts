import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { USERDETAILSDATA, USERSDATA, } from '../models/common.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
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
}
