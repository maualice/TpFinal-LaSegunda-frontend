import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [CheckoutComponent, DetailsComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule, //para que funcione ngmodel ,validaciones,etx
    MaterialModule,
    DashboardModule
  ]
})
export class CheckoutModule { }
