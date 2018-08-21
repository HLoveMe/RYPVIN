import { NetWorkUtilBox } from './../../app/tools/NetUtils';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  active:boolean = false
  constructor(public navCtrl: NavController,private netUtil:NetWorkUtilBox) {
    this.netUtil.User().login()
    setTimeout(()=>{
      this.active = true
    },3000)
  }

}
