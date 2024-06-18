import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'register',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {

  constructor () {}



}
