import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './dashboard/dashboard-components/update-user/update-user.component';
import { AddUserComponent } from './dashboard/dashboard-components/add-user/add-user.component';

export const Approutes: Routes = [
  {
    path: '',
    redirectTo: '/home', // Redirige vers la page "home" par défaut
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'update/:id',
    component: UpdateUserComponent
  },
  {
    path: 'add',
    component: AddUserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
      { path: 'component', loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule) }
    ]
  },
];
