
import { AppInstructions } from './Appinstructions/AppInstructions';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SideMenuPage } from "../pages/SideMenu/SideMenu";
import { VinMessagePage } from "../pages/VinMessage/VinMessage";

@NgModule({
  declarations: [
    MyApp,
    HomePage,SideMenuPage,VinMessagePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:"",
      mode:"ios",
      iconMode:"ios",
    }),
    //特性模块
    AppInstructions,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,SideMenuPage,VinMessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
