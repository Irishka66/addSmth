import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularDraggableModule } from 'angular2-draggable';


import { AddingRoutingModule } from './adding-routing.module';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { ContainerComponent } from './container/container.component';
import { ExitComponent } from './exit/exit.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    AddingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularDraggableModule
  ],
  providers: [
  ],
  declarations: [MainComponent, ListComponent, ContainerComponent, ExitComponent, FormComponent]
})
export class AddingModule { }
