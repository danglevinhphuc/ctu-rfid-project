import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileDropModule } from 'ngx-file-drop/lib/ngx-drop';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';
import { AddEventComponent } from './components/add-event/add-event.component';

const appRoutes: Routes = [
  {path: 'event', component: UploadComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UploadComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
