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

  signup() {
    this.loading = true;
    console.log(this.name, this.email, this.password);

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
