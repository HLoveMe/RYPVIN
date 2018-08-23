import {
    Component, Input, AfterViewInit,
    ViewChild, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter
} from "@angular/core";
import { TextInput } from "ionic-angular";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const RADIO_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchInput),
    multi: true
};

@Component({
    selector: "ion-search",
    templateUrl: "search.component.html",
    styles: [`:host{display:block;}`],
    providers: [RADIO_VALUE_ACCESSOR],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInput implements AfterViewInit, ControlValueAccessor {
    //ion-input站位文字
    _placeholder = ""
    //是否处于编辑状态
    edit: boolean = false;
    //当前输入的值
    value: string = "";

    @Input() type: string = "text"
    @Input() placeholder: string = "请输入"
    @Input() leftIcon: boolean = true
    @Input() centerIcon: boolean = false
    @ViewChild("textInput") textInput: TextInput;
    //导出InpuText事件
    @Output() blur: EventEmitter<UIEvent> = new EventEmitter()
    @Output() focus: EventEmitter<UIEvent> = new EventEmitter()
    //ControlValueAccessor
    _registerOnChange: Function
    constructor(
        private vcd: ChangeDetectorRef
    ) { }
    ngAfterViewInit() { }
    //开始
    startInput(event) {
        if (this.edit == false) {
            this.edit = true;
            this.textInput.setFocus()
            this._placeholder = this.placeholder
        }
    }
    //失去焦点
    onblur(event) {
        if (this.value.length >= 1) {
            this.edit = true
        } else {
            this.edit = false
            this._placeholder = ""
        }
        this.blur.emit(event)
    }
    onfocus(event) {
        this.focus.emit(event)
    }
    setFocus() { this.textInput.setFocus() }
    setBlur() { this.textInput.setBlur() }


    //输入框文本检查
    textChange(text) {
        this.value = text
        this._registerOnChange(text)
        this.vcd.markForCheck()
    }
    //ControlValueAccessor 协议
    writeValue(obj: string) {
        if (obj) {
            this.value = obj;
            this.startInput(null)
        }
    }
    registerOnChange(fn: Function) {
        this._registerOnChange = fn
    }
    registerOnTouched(fn: any) { }
    setDisabledState(isDisabled: boolean) { }
}
