import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  phoneRequired: boolean = false;
  patternPhone: boolean = false;
  myForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      "userName": new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z-\\s]+$")
      ]),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      "userPhone": new FormControl("", [
        Validators.pattern("^[ 0-9-]+$")
      ]),
    });
  }

  ///^[\d]{1}\([\d]{2,3}\)[\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/

  // onPhoneChange() {
  //   if (this.myForm.controls['userPhone'].value == '') {
  //     this.phoneRequired = false;
  //     this.patternPhone = false;
  //     return;
  //   }
  //   this.phoneRequired = true;
  //   this.patternPhone = true;
  // }

  submit() {
    console.log(this.myForm);
  }

}
