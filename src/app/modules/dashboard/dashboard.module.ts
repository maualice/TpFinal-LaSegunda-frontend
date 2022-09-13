import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { ComponentsModule, MaterialModule } from '../../shared/modules';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent,ProductComponent } from '../dashboard/components';
import { CartComponent } from 'src/app/shared/components/cart/cart.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListStoresComponent } from './components/list-stores/list-stores.component';
import { AddStoresComponent } from './components/add-stores/add-stores.component';
import { FooterComponent } from './components/footer/footer.component';
import { WeatherWidgetMainComponent } from 'src/app/shared/components/weather-widget-main/weather-widget-main.component';

const components = [NavbarComponent, ProductComponent,CartComponent];

@NgModule({
  declarations: [DashboardComponent, ...components, ListProductsComponent, ListStoresComponent, AddStoresComponent, FooterComponent,WeatherWidgetMainComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports:[NavbarComponent]
})
export class DashboardModule {}
