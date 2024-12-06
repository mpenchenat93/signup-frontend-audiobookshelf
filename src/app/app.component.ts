import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) {}

  audiobookshelfUrl = 'https://audiovaltorta.studycompanion.fr';

  visible = false;

  value = '';

  loading = false;
  usernameError = false;
  emailError = false;

  name = '';
  email = '';
  password = '';

  items: any[] = [];

  showDialog() {
    this.visible = true;
  }

  throwErrorF() {
    this.messageService.add({
      severity: 'error',
      summary: 'Erreur interne',
      detail: 'Si le problème persiste, contactez-nous.',
      key: 'br',
      life: 5000,
    });
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
    this.usernameError = false;
    this.apiService.signup(this.name, this.email, this.password).subscribe({
      next: () => {
        this.loading = false;
        this.resetForm();
        this.showDialog();
      },
      error: (err) => {
        this.loading = false;
        if (err?.error?.details?.includes('Username already taken')) {
          this.usernameError = true;
        } else {
          this.throwErrorF();
          this.resetForm();
        }
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
