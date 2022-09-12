import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

import { LoginComponent, RegisterComponent } from '../auth/views';

import { ComponentsModule, MaterialModule } from '../../shared/modules';

const views = [LoginComponent, RegisterComponent];

@NgModule({
  declarations: [AuthComponent, ...views],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    MaterialModule,
    FormsModule,
  ],
})
export class AuthModule {}
