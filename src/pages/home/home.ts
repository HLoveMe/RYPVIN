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

/***
 <style>
    SearchInput {
        height: 88px;
        width: 100%;
        background-color: red;
    }
</style>

<ion-header>
    <ion-navbar>
        <button ion-button smart menuToggle>
            <i class="icon iconfont icon-personalcenter"></i>
        </button>
        <ion-title>
            容易配车架号查询
        </ion-title>
    </ion-navbar>
</ion-header>

<ion-content no-padding disable-scroll class="content container">
    <div class="home_icon">
        <img src="../../assets/imgs/index_bg.png" alt="">
    </div>
    <div class="vin_input flex-box-center">
        <ion-input type="email" class="" placeholder="输入车架号"></ion-input>
    </div>
 
    <ion-search [class.active]="active">

    </ion-search>
</ion-content>
  
 
 
 */