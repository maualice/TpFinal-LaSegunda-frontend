import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankYouPageRoutingModule } from './thank-you-page-routing.module';
import { ThankYouPageComponent } from './thank-you-page.component';
import { DashboardModule } from '../../dashboard/dashboard.module';


@NgModule({
  declarations: [ThankYouPageComponent],
  imports: [
    CommonModule,
    ThankYouPageRoutingModule,
    DashboardModule
  ]
})
export class ThankYouPageModule { }
