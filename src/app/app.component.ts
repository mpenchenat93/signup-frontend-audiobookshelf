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
  emailError = false;

  name = '';
  email = '';
  password = '';

  items: any[] = [];

  signup() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.resetForm();
    }, 2000);
  }

  ngOnInit(): void {
    this.items = [];
    //   {
    //     label: 'homeLabel',
    //     icon: 'pi pi-home',
    //     // command: () => this.goToHome(),
    //   },
    //   {
    //     label: 'shareLabel',
    //     icon: 'pi pi-share-alt',
    //     // command: () => this.goToShare(),
    //   },
    // ];
  }

  private resetForm() {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}
