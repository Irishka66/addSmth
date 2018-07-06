import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { ContainerForDynamicComponent } from './container-for-dynamic/container-for-dynamic.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicRoutingModule
  ],
  declarations: [ContainerForDynamicComponent, DynamicComponent],
  entryComponents: [ DynamicComponent ],
})
export class DynamicModule { }
