import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  signup(name: string, email: string, password: string) {
    const url = `${this.apiUrl}/signup`;
    return this.http.post(url, { name, email, password });
  }
}
