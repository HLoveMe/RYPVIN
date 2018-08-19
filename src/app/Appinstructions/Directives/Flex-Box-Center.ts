
import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: '[flex-box-center]'
})
export class FlexBoxCenter {
    constructor(
        private render:Renderer2,
        private target:ElementRef,
    ) {
        this.render.setStyle(this.target.nativeElement,"display","flex")
        this.render.setStyle(this.target.nativeElement,"justify-content","center")
        this.render.setStyle(this.target.nativeElement,"align-items","center")
    }
}