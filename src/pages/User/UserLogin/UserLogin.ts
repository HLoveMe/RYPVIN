
import { Component, Input, ViewChild } from "@angular/core";
import { TextInput } from "../../../app/Provider/Component/Input/TextInput";

@Component({
    selector:"user-login",
    templateUrl:"./UserLogin.html",
})
export class UserLogin{
    passLIcons = [
        {
            name:"ios-contacts",
            fontSize:"0.6rem",
        }
    ]
    accountRIcons = [
        {
            name:"ios-close-circle-outline",
            fontSize:"0.3rem",
            show:true
        }
    ]
    acountLIcon = [
        {
            name:"ios-phone-portrait-outline",
            fontSize:"0.6rem",
        }
    ] 
    @ViewChild("Account") Account:TextInput
    @ViewChild("Password") Password:TextInput
    constructor(){}
    AccounticonClick(item){
        // if(item.show != null){
        //     item.show = !item.show
        //     this.Account.update()
        // }else if(item.select != null){
        //     item.select = !item.select
        //     this.Account.update()
        // }
    }
    PasswordiconClick(item){
        // if(item.show != null){
        //     item.show = !item.show
        //     this.Password.update()
        // }else if(item.select != null){
        //     item.select = !item.select
        //     this.Password.update()
        // }
    }
}
    