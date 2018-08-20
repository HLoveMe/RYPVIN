import { Injectable } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version';

export enum AppMode {
    Beta = 0,
    Development = 1,
    Release = 2
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
    g_url:string = ""
    o_url:string = ""
    m_url:string = ""

    constructor(mode:AppMode = AppMode.Beta){

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