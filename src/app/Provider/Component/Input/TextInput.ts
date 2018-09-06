
import { Component, Output,Renderer2, Input,EventEmitter, ViewChild,ElementRef } from "@angular/core";

class IconOptions{
    name:string = ""
    fontSize:string = "3rem"
}
class ExIconOption extends IconOptions{
    selectIcon:string = ""
    status:boolean = false
    constructor(ops){
        super()
    }
}

@Component({
    selector: "text-input",
    templateUrl: "TextInput.html",
    styles:[`:host{display:block;overflow: hidden;}`],
})
export class TextInput {
    @Input() leftIcons:Array<IconOptions> = []
    @Output() iconClick:EventEmitter<any> = new EventEmitter()
    @ViewChild("Container") Container:ElementRef;
    constructor(private render:Renderer2) { 
        
    }
    IconClick(item){
        this.iconClick.next(item)
    }
    ngAfterViewInit() {
        let rect = (this.Container.nativeElement as HTMLElement).getBoundingClientRect() as DOMRect
        this.render.setStyle(this.Container.nativeElement,"border-radius",rect.height/2 +"px")
    }
}
