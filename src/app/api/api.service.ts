import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getApiUrl() {
    const hostname = window.location.hostname;
    if (hostname === 'localhost') return '/api';
    return 'https://backend-topaz-tau.vercel.app/api';
  }

  signup(name: string, email: string, password: string) {
    const url = `${this.getApiUrl()}/signup`;
    return this.http.post(url, { name, email, password });
  }
}
