import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularDraggableModule } from 'angular2-draggable';
import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AddingRoutingModule } from './adding-routing.module';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { ContainerComponent } from './container/container.component';
import { ExitComponent } from './exit/exit.component';
import { FormComponent } from './form/form.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendComponent } from './friend/friend.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartjsComponent } from './statistics/chartjs/chartjs.component';

@NgModule({
  imports: [
    CommonModule,
    AddingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularDraggableModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
  ],
  declarations: [
    MainComponent, 
    ListComponent, 
    ContainerComponent, 
    ExitComponent, 
    FormComponent, 
    FriendsComponent, 
    FriendComponent, 
    StatisticsComponent, 
    ChartjsComponent
  ]
})
export class AddingModule { }
