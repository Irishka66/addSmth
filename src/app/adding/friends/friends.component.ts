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
    trigger('leave', [
      state('active',   
      style({
      })),
      transition('* => void', [
        animate('400ms ease-in', style({
          transform: 'scale(0.5)',
          opacity: 0
        }))
      ]),
    ]),
    trigger('enter', [
      state('active',   
      style({
      })),
      transition('void => *', [
        style({
          transform: 'scale(0.5)',
          opacity: 0
        }),
        animate('400ms ease-in')
      ]),
    ]),
    
  ]
})

export class FriendsComponent implements OnInit {

  nameList: Array<any>;
  existModal: boolean;
  iFromOpenModal: number;

  constructor(private router: Router, private friendService: FriendService) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('friends')) !== null) {
      this.friendService.friendList = JSON.parse(localStorage.getItem('friends'));
    }

    this.iFromOpenModal = -1;
  }

  editFriend(i) {
    this.router.navigate(['adding/friend', i]);
  }

  deleteInfoFriend(i) {
    this.friendService.friendList.splice(i, 1);
    this.friendService.saveLocalFriends();
  }

  openModal(event, i) {
    event.stopPropagation();
    this.iFromOpenModal = i;
    this.existModal = true
  }

  closeModal() {
    event.stopPropagation();
    this.iFromOpenModal = -1;
    this.existModal = false;
  }
}
