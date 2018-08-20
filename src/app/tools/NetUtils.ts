import { Injectable } from '@angular/core';
import { AppInfoService } from './Api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export type URLFetch = (...args)=>Observable<any>;

export type RequestBox = { [key: string]: URLFetch } 

@Injectable()
export class NetWorkUtilBox {
    constructor(private appInfo:AppInfoService){

    }
    User():RequestBox{
        return {
            login:(account,password,type)=>{
                return Observable.of(1)
            },
            getUserInfo:(uid,token)=>{
                return Observable.of(1)
            }
        }
    }

}