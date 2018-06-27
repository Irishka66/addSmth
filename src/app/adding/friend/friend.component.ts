import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {FriendService} from '../../services/friend.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  id: number;
  nameFriend: string;
  emailFriend: string;
  phoneFriend: string;
  // currentFriend: Object;

  constructor(private activateRoute: ActivatedRoute, private friendService: FriendService) { 
    this.id = activateRoute.snapshot.params['id'];

   
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('friends')) !== null) {
      this.friendService.friendList = JSON.parse(localStorage.getItem('friends'));
    }

    let currentFriend = this.friendService.friendList[this.id];
    // console.log(currentFriend);
    this.nameFriend = currentFriend['nameFriend'];
    this.emailFriend = currentFriend['emailFriend'];
    this.phoneFriend = currentFriend['phoneFriend'];
  }

  saveChanges() {
    this.friendService.friendList[this.id]['nameFriend'] = this.capitalizeFirstLetter(this.nameFriend.trim());
    this.friendService.friendList[this.id]['emailFriend'] = this.emailFriend;
    this.friendService.friendList[this.id]['phoneFriend'] = this.phoneFriend;

    this.friendService.friendList.sort(this.compareNameFriend);
    this.friendService.saveLocalFriends();
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  compareNameFriend(a, b) {
    if (a.nameFriend > b.nameFriend) {
      return 1;
    } else {
      return -1;
    }
  }

  ngOnDestroy() {
    this.saveChanges();
  }
  
}
