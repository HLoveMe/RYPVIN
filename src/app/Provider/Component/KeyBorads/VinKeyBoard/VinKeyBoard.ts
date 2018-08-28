import { Component, Input,OnInit,Renderer2, ViewChild,ElementRef} from "@angular/core";
import { Platform } from 'ionic-angular';
import { CustomAnimation } from './../../../Animations/KeyBoard';

class KeyValue{
    key:any = ""
    value:string =""
    constructor(key,value){
        this.key = key;
        this.value = value;
    }
}

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
    Voice:KeyValue = {key:"V",value:""}
    Delete:KeyValue = {key:"D",value:""}
    keyValueCollection:Array<Array<KeyValue>> = [
        [
            {key:"1",value:""},{key:"2",value:""},{key:"3",value:""},{key:"4",value:""},{key:"5",value:""},{key:"6",value:""}
            ,{key:"7",value:""},{key:"8",value:""},{key:"9",value:""},{key:"0",value:""}
        ],
        [
            {key:"Q",value:""},{key:"W",value:""},{key:"E",value:""},{key:"R",value:""},{key:"T",value:""},{key:"Y",value:""}
            ,{key:"U",value:""},{key:"I",value:""},{key:"O",value:""},{key:"P",value:""}
        ],
        [
            {key:"A",value:""},{key:"S",value:""},{key:"D",value:""},{key:"F",value:""},
            {key:"G",value:""},{key:"H",value:""},{key:"J",value:""},{key:"K",value:""},{key:"L",value:""}
        ],
        [
            {key:"Z",value:""},{key:"X",value:""},{key:"C",value:""},{key:"V",value:""},
            {key:"B",value:""},{key:"N",value:""},{key:"M",value:""}
        ]
    ]
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