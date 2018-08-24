import { SearchInput } from './Provider/Component/Search/search.component';

import { NetWorkUtilBox } from './tools/NetUtils';
import { AppInfoService } from './tools/Api';
import { About } from './../pages/About/About';

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
import { Setting } from '../pages/Setting/Setting';
import { AppVersion } from '@ionic-native/app-version';
import { CustomDIVInput } from './Provider/Component/EditView/CustomDIV';
import { Camera } from '@ionic-native/camera';
@NgModule({
  declarations: [
    MyApp,
    HomePage,SideMenuPage,VinMessagePage,Setting,About,
    
    
    SearchInput,CustomDIVInput
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
    HomePage,SideMenuPage,VinMessagePage,Setting,About,


    SearchInput,CustomDIVInput

  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppVersion,AppInfoService,NetWorkUtilBox
  ]
})
export class AppModule {}
