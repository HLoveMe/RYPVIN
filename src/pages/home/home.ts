import { NetWorkUtilBox } from './../../app/tools/NetUtils';
import { Component, ViewChild,OnInit } from '@angular/core';
import { NavController, TextInput } from 'ionic-angular';
import { Element } from '@angular/compiler';

import { KeyKoard } from "../../app/Appinstructions/Injectable/Key-board";
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements OnInit{
  keyboardShow:Subscription = null;
  vinValue: string = "a"
  @ViewChild(TextInput) textInput: TextInput;
  constructor(public navCtrl: NavController,
    private netUtil: NetWorkUtilBox,
    private keyboard: KeyKoard
  ) {
    // this.netUtil.User().login()

  }
  ngOnInit(){
    
  }
  ionViewWillEnter(){
    this.keyboardShow = this.keyboard.keyboardWillShow().subscribe(()=>{
      // this.keyboard.hide()
    })
  }
  ionViewWillLeave(){
    this.keyboardShow && this.keyboardShow.unsubscribe()
  }
  vinInput(vin: string) {
    // console.log(1111,this.keyboard.isVisible)
  }
}
