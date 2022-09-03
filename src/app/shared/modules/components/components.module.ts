import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundComponent } from '../../components/notfound/notfound.component';
import { MaterialModule } from '../material/material.module';


const components = [NotfoundComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule,MaterialModule],
  exports: [...components]
})
export class ComponentsModule {}
