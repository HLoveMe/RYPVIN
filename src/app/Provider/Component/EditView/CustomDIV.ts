/**
 * Created by zhuzihao on 2017/6/16.
 */

import {Component, Renderer2, ViewChild, ElementRef, forwardRef} from "@angular/core"
import {ControlValueAccessor,NG_VALUE_ACCESSOR} from "@angular/forms";

let EXE_COUNTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomDIVInput),
  multi: true
};

@Component({
  selector:"Edit-div",
  template:
`
 <div #container class="div-container" contenteditable="true" (keyup)="valueChange()">
</div>
`,
  styles:[
`
  .div-container{
    -webkit-user-select: auto;
    height: 100px;
    max-height: 200px;
    border: 1px solid rebeccapurple;
    width:"100%"
  }
  :host{
    display:block;
  }
`,
  ],
  providers:[EXE_COUNTER_VALUE_ACCESSOR]
})

export  class CustomDIVInput implements ControlValueAccessor{
  @ViewChild("container") container:ElementRef;
  change:Function;
  value:string;
  constructor(private render:Renderer2){}

  writeValue(obj: any){
    if(obj){
      this.value = obj;
      this.container.nativeElement.innerText=obj;
    }
  }
  registerOnChange(fn: any){
    this.change = fn;
  }

  registerOnTouched(fn: any){

  }
  setDisabledState?(isDisabled: boolean){
    if(isDisabled){
      this.render.removeAttribute(this.container.nativeElement,"contenteditable");
    }else{
      this.render.setAttribute(this.container.nativeElement,"contenteditable","true");
    }
  }

  valueChange(){
    if(this.change){
      this.value = this.container.nativeElement.innerText
      this.change(this.value);
    }
  }
}
