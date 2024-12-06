import { Component } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private apiService: ApiService) {}

  audiobookshelfUrl = 'https://audiovaltorta.studycompanion.fr';

  visible = false;

  value = '';

  loading = false;
  emailError = false;

  name = '';
  email = '';
  password = '';

  items: any[] = [];

  showDialog() {
    this.visible = true;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  signup() {
    this.loading = false;
    if (!this.name || !this.email || !this.password) {
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.emailError = true;
      return;
    } else {
      this.emailError = false;
    }

    this.loading = true;
    this.apiService.signup(this.name, this.email, this.password).subscribe({
      next: (data) => {
        console.log(data);
        this.loading = false;
        this.resetForm();
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
        this.resetForm();
      },
    });
  }

  ngOnInit(): void {
    this.items = [];
  }

  private resetForm() {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}
