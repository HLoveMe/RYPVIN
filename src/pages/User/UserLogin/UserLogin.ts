
import { Component } from "@angular/core";

@Component({
    selector:"user-login",
    templateUrl:"./UserLogin.html",
})
export class UserLogin{
    passLIcons = [
        {
            name:"ios-contacts",
            fontSize:"3rem",
        }
    ]
    acountLIcon = [
        {
            name:"ios-phone-portrait-outline",
            fontSize:"3rem",
        }
    ] 
    constructor(){}
    iconClick(item){
        console.log(item);
    }
}
    