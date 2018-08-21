import { Injectable } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version';

export enum AppMode {
    Beta = "beta",
    Development = "development",
    Release = "release"
}

export class AppConfig {
    /**
     * app name
     */
    name:string = "App"
    /**
     * 当前处于开发的环境
     */
    mode:AppMode = AppMode.Beta
    /**
     * ionic 代码版本
     */
    ionicVersion:string = "1.0.3"

    /**
     *  APP 版本
     */
    appversion:string = "0.0.0"

}
export class URLConfig{
    gUrl:string = ""
    oUrl:string = ""
    uUrl:string = ""
    msgUrl:string = ""
    vinUrl:string = ""
    mUrl:string = ""
    registerUrl:string = ""
    sUrl:string = ""
    wxUrl:string = ""
    constructor(mode:AppMode = AppMode.Beta){
        if(mode == AppMode.Beta){
            this.gUrl ="https://g-api-test-" + AppMode.Beta + ".ecpei.cn"
            this.oUrl =  "https://o-api-test-" + AppMode.Beta + ".ecpei.cn"
            this.uUrl =  "https://u-api-test-" + AppMode.Beta + ".ecpei.cn"
            this.msgUrl =  "https://message-api-test-" + AppMode.Beta + ".ecpei.cn"
            this.vinUrl = "https://vin-api-test-" + AppMode.Beta + ".ecpei.cn"
            this.mUrl = "https://m-test-" + AppMode.Beta + ".ecpei.cn/"
            this.registerUrl = "https://u-api-test.ecpei.cn"
            this.sUrl =  "https://s-api-test-" + AppMode.Beta + ".ecpei.cn"
            this.wxUrl = "https://api-test.ecpei.cn"
        }else if(mode == AppMode.Release){
            this.gUrl = "https://g-api.ecpei.cn"
            this.oUrl = "https://o-api.ecpei.cn"
            this.uUrl = "https://u-api.ecpei.cn"
            this.msgUrl = "https://message-api.ecpei.cn"
            this.vinUrl = "https://vin-api.ecpei.cn"
            this.mUrl = "https://m-test-1-0-1.ecpei.cn/"
            this.registerUrl = "https://u-api-test.ecpei.cn"
            this.sUrl =  "https://s-api.ecpei.cn"
            this. wxUrl = "https://api.ecpei.cn"
        }else{}
    }
}

/**
 *  需要修改的变量
 *  currentAppMode 当前app所处的开发状态
 */

const currentAppMode:AppMode = AppMode.Beta



@Injectable()
export class AppInfoService {

    //获取APP信息
    info:AppConfig = new AppConfig()

    //得到url配置信息
    urlConfig:URLConfig = new URLConfig(currentAppMode)

    
    constructor(private appV:AppVersion){
        this.appV.getAppName().then((name)=>{
            this.info.name = name
        }).catch(()=>{})
        this.appV.getVersionCode().then((version)=>{
            this.info.appversion = version + ""
        }).catch(()=>{})
    }
}