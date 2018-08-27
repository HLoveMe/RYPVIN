import { Injectable, Renderer2, Injector } from "@angular/core";
import { App } from "ionic-angular";
import { VinKeyBoard } from "../../Component/KeyBorads/VinKeyBoard/VinKeyBoard";

export enum KeyBoardStyle{
    NumberKeyBoard = "NumberKeyBoard",
    VinKeyBoard = "VinKeyBoard"
}

@Injectable()
export class CustomKeyBoardManager{
    constructor(
        private inje:Injector
    ){}
    showKeyBoard(style:KeyBoardStyle,ele:any){
        let render = this.inje.get(Renderer2)
        // render.appendChild(ele,"<vinkeyboard></vinkeyboard>")
    }
}