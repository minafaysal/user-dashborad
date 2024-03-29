import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<ApiResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = { headers: headers };

    return this.http.get<ApiResponse>(
      'https://reqres.in/api/users?page=2',
      options
    );
  }
}
