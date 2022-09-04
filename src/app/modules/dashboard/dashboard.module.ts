import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { ComponentsModule, MaterialModule } from '../../shared/modules';

import { NavbarComponent,ProductComponent } from '../dashboard/components';
import { CartComponent } from 'src/app/shared/components/cart/cart.component';

const components = [NavbarComponent, ProductComponent,CartComponent];

@NgModule({
  declarations: [DashboardComponent, ...components],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    MaterialModule,
  ],
  exports:[NavbarComponent]
})
export class DashboardModule {}
