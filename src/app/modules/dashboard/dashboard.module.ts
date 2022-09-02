import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { ComponentsModule, MaterialModule } from '../../shared/modules';

import { NavbarComponent, CardComponent } from '../dashboard/components';

const components = [NavbarComponent, CardComponent];

@NgModule({
  declarations: [DashboardComponent, ...components],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    MaterialModule,
  ],
})
export class DashboardModule {}
