import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FriendService} from '../../services/friend.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
  animations: [
    trigger('friendState', [
      // state('inactive', style({
      //   backgroundColor: '#eee',
      //   transform: 'scale(1)'
      // })),
      state('active',   style({
        // backgroundColor: '#cfd8dc',
        transform: 'scale(0.5)',
        opacity: 0
      })),
      transition('inactive => active', animate('300ms ease-in')),
      // transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class FriendsComponent implements OnInit {

  nameList: Array<any>;
  state: string;
  iFromDelete: number;
  constructor(private router: Router, private friendService: FriendService) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('friends')) !== null) {
      this.friendService.friendList = JSON.parse(localStorage.getItem('friends'));
    }
    this.state = 'inactive';
    this.iFromDelete = -1;
  }

  editFriend(i) {
    this.router.navigate(['adding/friend', i]);
  }

  deleteInfoFriend($event, i) {
    // console.log($event);
    // console.log(this.state);
    this.iFromDelete = i;
    this.state = 'active';
    // console.log(this.state);
    this.friendService.friendList.splice(i, 1);
    this.friendService.saveLocalFriends();
  }

}
