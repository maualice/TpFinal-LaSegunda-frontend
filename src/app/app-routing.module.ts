import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotfoundComponent } from './shared/components/notfound/notfound.component';

import { AuthGuard } from '././shared/guards';

import { LoginComponent } from './modules/auth/views/login/login.component'; //
import { RegisterComponent } from './modules/auth/views/register/register.component'; //

const routes: Routes = [
  
  { 
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },  /*
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },*/
  {
    path: 'dashboard',
    //canLoad: [AuthGuard],
    //canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  /*
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch:'full',
  },
  
  */
  { path: 'checkout', canActivate: [AuthGuard], loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule) },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
