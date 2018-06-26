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
      state('active',   
      style({
      })),
      transition('* => void', [
        animate('800ms ease-in', style({
          transform: 'scale(0.5)',
          opacity: 0
        }))
      ])
    ]),
    
  ]
})

export class FriendsComponent implements OnInit {

  nameList: Array<any>;
  constructor(private router: Router, private friendService: FriendService) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('friends')) !== null) {
      this.friendService.friendList = JSON.parse(localStorage.getItem('friends'));
    }
  }

  editFriend(i) {
    this.router.navigate(['adding/friend', i]);
  }

  deleteInfoFriend(i) {
    this.friendService.friendList.splice(i, 1);
    this.friendService.saveLocalFriends();
  }

}
