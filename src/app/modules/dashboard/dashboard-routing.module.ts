import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { AuthGuard } from '../../shared/guards';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListStoresComponent } from './components/list-stores/list-stores.component';
import { AddStoresComponent } from './components/add-stores/add-stores.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  { path: 'products',component: ListProductsComponent},
  { path: 'stores',component: ListStoresComponent},
  { path: 'add-stores',component: AddStoresComponent},
  { path: 'edit-stores/:id',component: AddStoresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
