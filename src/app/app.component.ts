import { VinMessagePage } from './../pages/VinMessage/VinMessage';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  sideMenus = []
  @ViewChild("RootConetent") navC:NavController
  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuC:MenuController,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.sideMenus = [
      {
        index:0,
        title:"Vin消息",
        page:VinMessagePage
      }
    ]
  }
  openPage(item){
    this.navC.push(item.page)
  }

}

