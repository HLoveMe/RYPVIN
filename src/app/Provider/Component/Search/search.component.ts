import { Component, Input, AfterViewInit ,
    Renderer2,ElementRef,
    ViewChild
} from "@angular/core";
import { TextInput } from "ionic-angular";

@Component({
    selector:"ion-search",
    templateUrl:"search.component.html",
    styles:[`:host{display:block;}`]
})
export class SearchInput implements AfterViewInit{
    _placeholder = ""

    edit:boolean = false;
    value:string = "";
    @Input() type:string = "text"
    @Input() placeholder:string = "请输入"
    @Input() leftIcon:boolean = true
    @Input() centerIcon:boolean = false

    @ViewChild("textInput") textInput:TextInput;
    constructor(private render:Renderer2){

    }
    ngAfterViewInit(){

    }
    //开始
    startInput(event){
        this.edit = true;
        this.textInput.setFocus()
        this._placeholder = this.placeholder
    }
    //失去焦点
    onblur(){
        if(this.value.length >= 1){
            this.edit = true    
        }else{
            this.edit  = false
            this._placeholder = ""
        }
    }
}
