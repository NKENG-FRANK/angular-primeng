import { Routes } from '@angular/router';
import { Auth } from './components/auth/auth';
import { Landing } from './components/landing/landing';


export const routes: Routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', component: Auth},
    {path: 'landing', component: Landing},
    {path: '**', redirectTo: 'auth'}
];
