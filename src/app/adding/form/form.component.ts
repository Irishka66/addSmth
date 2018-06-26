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
    let friendListLength = this.friendService.friendList.length;
    let i: number;
    console.log(friendListLength);
    if (friendListLength) {
      // i = this.friendService.friendList[friendListLength - 1]['idFriend'] + 1;
      i = friendListLength;
    } else {
      i = 0;
    }

    let nameFriendCapitalize = this.capitalizeFirstLetter(this.myForm.controls.friendName.value.trim());
    console.log(nameFriendCapitalize);

    let obj = {
      'idFriend': i,
      'nameFriend': nameFriendCapitalize,
      'emailFriend': this.myForm.controls.friendEmail.value.trim(),
      'phoneFriend': this.myForm.controls.friendPhone.value.trim(),
    };
    this.friendService.friendList.push(obj);


    this.friendService.friendList.sort(this.compareNameFriend);

    this.friendService.saveLocalFriends();
    this.clearFields();
    console.log(this.friendService.friendList);
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

  clearFields() {
    this.myForm.reset();
  }
}
