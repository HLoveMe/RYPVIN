import { NetWorkUtilBox } from './../../app/tools/NetUtils';
import { Component, ViewChild } from '@angular/core';
import { NavController, TextInput } from 'ionic-angular';
import { Element } from '@angular/compiler';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vinValue: string = ""
  @ViewChild(TextInput) textInput: TextInput;
  constructor(public navCtrl: NavController, private netUtil: NetWorkUtilBox) {
    // this.netUtil.User().login()

  }
  focus(){
    
  }
  vinInput(vin: string) {
    
  }
}
