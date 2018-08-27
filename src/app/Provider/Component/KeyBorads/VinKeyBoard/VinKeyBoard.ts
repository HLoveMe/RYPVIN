import { Component, Input,OnInit,Renderer2, ViewChild,ElementRef} from "@angular/core";
import { Platform } from 'ionic-angular';
import { CustomAnimation } from './../../../Animations/KeyBoard';



@Component({
    selector:"vinkeyboard",
    templateUrl:"VinKeyBoard.html",
    styles:[`:host{display:block;width:100%;}`],
    animations:CustomAnimation
})
export class VinKeyBoard implements OnInit{
    content:string= ""
    isIphoneX:boolean = false
    @Input() state:string="inactive"
    @ViewChild("Container") Container:ElementRef
    constructor (
        private plt:Platform,
        private render:Renderer2
    ) {
        this.content = JSON.stringify(this.plt.version())
        this.isIphoneX = this.plt.is("iphone") && this.plt.height()== 812
    }
    ngOnInit(){
        if(this.isIphoneX)
            this.render.setStyle(this.Container.nativeElement,"height","32.9rem")
    }
    dismiss(event){
    }
    onClick(){}
}