import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloComponent} from './hello/hello.component';
import {ToAdding} from './to-adding.guard';

// I use loadChildren to apply lazy-loading
// I use guard canActivate to prevent going to the next page without entering correct code
const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
  },
  {
    path: 'adding',
    loadChildren: './adding/adding.module#AddingModule',
    canActivate: [ToAdding]
  },
  {
    path: '**',
    component: HelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
