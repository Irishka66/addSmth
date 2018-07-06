import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerForDynamicComponent } from './container-for-dynamic/container-for-dynamic.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerForDynamicComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule { }
