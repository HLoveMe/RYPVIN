
import { Component, Input, AfterViewInit ,
    Renderer2,ElementRef,
    ViewChild
} from "@angular/core";

@Component({
    selector:"ion-search",
    templateUrl:"SearchInput.html",
    
})
export class SearchInput implements AfterViewInit{
    @Input() type:string = "text"
    @ViewChild("InputContainer") InputContainer:ElementRef
    constructor(private render:Renderer2){

    }
    ngAfterViewInit(){
    }
}