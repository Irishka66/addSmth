import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AddingRoutingModule } from './adding-routing.module';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    AddingRoutingModule,
    FormsModule
  ],
  providers: [
  ],
  declarations: [MainComponent, ListComponent]
})
export class AddingModule { }
