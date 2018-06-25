import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {FriendService} from '../../services/friend.service';

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
    let currentFriend = this.friendService.friendList[this.id];
    console.log(currentFriend);
    this.nameFriend = currentFriend['nameFriend'];
    this.emailFriend = currentFriend['emailFriend'];
    this.phoneFriend = currentFriend['phoneFriend'];
  }

  saveChanges() {
    this.friendService.friendList[this.id]['nameFriend'] = this.nameFriend;
    this.friendService.friendList[this.id]['emailFriend'] = this.emailFriend;
    this.friendService.friendList[this.id]['phoneFriend'] = this.phoneFriend;
    this.friendService.saveLocalFriends();
  }

  ngOnDestroy() {
    this.saveChanges();
  }
  
}
