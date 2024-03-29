import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { USER } from '../models/common.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://reqres.in/api/users';
  constructor(private readonly http: HttpClient) {}

  getAllUsers(): Observable<USER[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<USER[]>(this.apiUrl, { headers });
  }
}
