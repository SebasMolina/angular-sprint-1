import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
    { path: '', component: AuthComponent },
    // { path: 'login', loadComponent: ()=> import('./components/auth/login/login.component').then(res=>res.LoginComponent) },
    // { path: 'register', loadComponent: ()=> import('./components/auth/register/register.component').then(res=>res.RegisterComponent) },
    { path: '**', redirectTo: '' }
];
