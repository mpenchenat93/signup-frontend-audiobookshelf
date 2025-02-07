import { Component, HostListener } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha-18';
import { MessageService } from 'primeng/api';
import { firstValueFrom } from 'rxjs';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
    private recaptchaV3Service: ReCaptchaV3Service
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
  phone = '';

  items: any[] = [];

  contactWrap = '40px';

  width = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
    this.contactWrap = this.width > 620 ? '40px' : '20px';
  }

  async executeImportantAction() {
    return await firstValueFrom(
      this.recaptchaV3Service.execute('importantAction')
    );
  }

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

  async signup() {
    this.loading = false;
    if (!this.name || !this.email || !this.password || !this.phone) {
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.emailError = true;
      return;
    } else {
      this.emailError = false;
    }

    const token = await this.executeImportantAction();

    this.loading = true;
    this.usernameError = false;
    this.apiService
      .signup(this.name, this.email, this.password, this.phone, token)
      .subscribe({
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
    this.width = window.innerWidth;
    this.contactWrap = this.width > 620 ? '40px' : '20px';
  }

  private resetForm() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.phone = '';
  }
}
