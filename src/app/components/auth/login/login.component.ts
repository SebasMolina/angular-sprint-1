import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  @Output() tab = new EventEmitter<string>();
  
  constructor () {}

  selectTab(tab: string){
    this.tab.emit(tab)
  }

}
