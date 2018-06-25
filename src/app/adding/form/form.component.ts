import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {FriendService} from '../../services/friend.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  phoneRequired: boolean = false;
  patternPhone: boolean = false;
  myForm: FormGroup;
  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      "friendName": new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z-\\s]+$")
      ]),
      "friendEmail": new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      "friendPhone": new FormControl("", [
        Validators.pattern("^[ 0-9-]+$")
      ]),
    });

    if (JSON.parse(localStorage.getItem('friends')) !== null) {
      this.friendService.friendList = JSON.parse(localStorage.getItem('friends'));
    }
  }

  submit() {
    // console.log(this.friendService.friendList);
    // console.log(this.friendService.friendList['idFriend']);
    // console.log(this.friendService.friendList.idFriend);
    let friendListLength = this.friendService.friendList.length;
    let i: number;
    console.log(friendListLength);
    if (friendListLength) {
      i = this.friendService.friendList[friendListLength - 1]['idFriend'] + 1;
    } else {
      i = 0;
    }
    let obj = {
      'idFriend': i,
      'nameFriend': this.myForm.controls.friendName.value,
      'emailFriend': this.myForm.controls.friendEmail.value,
      'phoneFriend': this.myForm.controls.friendPhone.value,
    };
    this.friendService.friendList.push(obj);

    this.friendService.saveLocalFriends();
    this.clearFields();
    console.log(this.friendService.friendList);
  }

  clearFields() {

  }
}
