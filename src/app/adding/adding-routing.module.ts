import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {ExitComponent} from './exit/exit.component';
import {ContainerComponent} from './container/container.component';
import {FormComponent} from './form/form.component';
import {FriendsComponent} from './friends/friends.component';
import {FriendComponent} from './friend/friend.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {MapComponent} from './map/map.component';

//  I need this code to apply lazy-loading
const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'exit',
        component: ExitComponent,
      },
      {
        path: 'form',
        component: FormComponent,
      },
      {
        path: 'friends',
        component: FriendsComponent,
      },
      { 
        path: 'friend/:id', 
        component: FriendComponent
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddingRoutingModule { }
