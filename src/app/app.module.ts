import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeDe from '@angular/common/locales/de'
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatComponent } from './chat/chat.component';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ChatComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // enable Angular Router
    HttpClientModule, // required for AngularSvgIconModule
    AngularSvgIconModule.forRoot(), // allow svg rendering
    FormsModule, // two way input binding
    BrowserAnimationsModule // add Animations to ngIf / ngFor
  ],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
