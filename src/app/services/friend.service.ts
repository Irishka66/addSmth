import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  public friendList: Array<any> = [];
  constructor() { }

  public saveLocalFriends() {
    let localFriends = JSON.stringify(this.friendList);
    localStorage.setItem('friends', localFriends);
  }
}
