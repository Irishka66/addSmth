import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AddingRoutingModule } from './adding-routing.module';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { ContainerComponent } from './container/container.component';
import { ExitComponent } from './exit/exit.component';

@NgModule({
  imports: [
    CommonModule,
    AddingRoutingModule,
    FormsModule
  ],
  providers: [
  ],
  declarations: [MainComponent, ListComponent, ContainerComponent, ExitComponent]
})
export class AddingModule { }
