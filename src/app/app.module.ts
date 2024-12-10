import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha-18';
import { AccordionModule } from 'primeng/accordion';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    MessagesModule,
    ProgressSpinnerModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    DividerModule,
    DialogModule,
    AccordionModule,
    ToastModule,
    RecaptchaV3Module,
  ],
  providers: [
    provideHttpClient(),
    MessageService,
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptchaSiteKey,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
