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
    edit:boolean = false;
    @Input() type:string = "text"
    @ViewChild("Cover") CoverEle:ElementRef
    @ViewChild("textInput") textInput:TextInput;
    constructor(private render:Renderer2){

    }
    ngAfterViewInit(){
    }
    startInput(event){
        this.render.setStyle(this.CoverEle.nativeElement,"visibility","hidden")
        this.textInput.setFocus()
    }
    onblur(){
        this.render.setStyle(this.CoverEle.nativeElement,"visibility","visible")
    }
}
