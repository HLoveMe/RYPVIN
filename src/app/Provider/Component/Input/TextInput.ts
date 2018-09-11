
import { Component, Output, Renderer2, Input, EventEmitter, ViewChild, ElementRef, ChangeDetectorRef, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

class IconOptions {
    name: string = ""
    fontSize: string = "16px"
}
//icon 切换
class ExIconOption extends IconOptions {
    selName: string = ""
    select: boolean = false
    constructor(ops) {
        super()
    }
}
//icon 显示和隐藏
class ShowIconOptopn extends IconOptions {
    show: boolean = true
    constructor(ops) {
        super()
    }
}

const RADIO_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextInput),
    multi: true
};
export function NoValidate(text){
    return text
}

export type Validate = Function

@Component({
    selector: "text-input",
    templateUrl: "TextInput.html",
    styles: [`:host{display:block;overflow: hidden;}`],
    providers: [RADIO_VALUE_ACCESSOR],
})
export class TextInput implements ControlValueAccessor {
    value: string = "1111"
    _registerOnChange: Function
    @Input() leftIcons: Array<IconOptions> = []
    @Input() rightIcons: IconOptions[] = []
    @Input() Validate:Validate = NoValidate
    @Output() iconClick: EventEmitter<any> = new EventEmitter()
    @ViewChild("Container") Container: ElementRef;
    constructor(private render: Renderer2, private dete: ChangeDetectorRef) { }
    update() {
        this.dete.markForCheck()
    }
    IconClick(item) {
        this.iconClick.emit(item)
    }
    ngAfterViewInit() {
        let rect = (this.Container.nativeElement as HTMLElement).getBoundingClientRect()
        this.render.setStyle(this.Container.nativeElement, "border-radius", rect.height / 2 + "px")
    }
    textChange(text) {
        this._registerOnChange && this._registerOnChange(text)
    }
    //ControlValueAccessor 协议
    writeValue(obj: string) {
        if(this.Validate){
            obj = this.Validate(obj)
        }
        this.value = obj
    }
    registerOnChange(fn: Function) {
        this._registerOnChange = fn
    }
    registerOnTouched(fn: any) { }
    setDisabledState(isDisabled: boolean) { }
}
