import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FriendService} from '../../services/friend.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
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
