import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule, Routes, withDebugTracing } from '@angular/router';
import { HomeComponent } from '@Pages/home/home.component';
import { LoginComponent } from '@Pages/login/login.component';
import { NoFoundComponent } from '@Pages/no-found/no-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }, 
  { path: '**', component: NoFoundComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())],
};
