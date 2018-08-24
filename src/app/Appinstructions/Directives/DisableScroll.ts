import { Directive, Renderer2, ElementRef} from '@angular/core';

@Directive({
    selector: '[disable-scroll]'
})
export class DisableScroll {
    constructor(
        private render:Renderer2,
        private target:ElementRef,
    ) {
        this.target.nativeElement.addEventListener("touchmove",(event)=>{event.preventDefault();},false)
    }
}