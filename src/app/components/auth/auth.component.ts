import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule, LoginComponent, RegisterComponent, CommonModule ],
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  constructor () {}

  currentTab: string = 'login';

  selectTab(tab: string) {
    this.currentTab = tab;
  }

}
