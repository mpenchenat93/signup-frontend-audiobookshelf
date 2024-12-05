import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';

  constructor() {}

  value = '';

  loading = false;
  name = '';
  email = '';
  subject = '';
  message = '';
  emailError = false;

  sendEmail() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
