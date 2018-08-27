import {Directive, OnInit, Renderer, Output, OnDestroy, ElementRef, EventEmitter} from '@angular/core';


/***
 * 
 *  <button (click.stop)="onClick($event)"></button>
 *  事件不会进行冒泡
 */
@Directive({
  selector:"[click.stop]"
})
export class StopEventPropagation implements OnInit,OnDestroy{
  @Output("click.stop") stopPropEvent = new EventEmitter<Event>();
  constructor(private render:Renderer,private ele:ElementRef){}
  unobserver:Function;
  ngOnInit(){
    this.unobserver = this.render.listen(this.ele.nativeElement,"click",(event)=>{
      event.stopPropagation()
      this.stopPropEvent.emit(event);
    })
  }
  ngOnDestroy(){
    //不在监听事件
    this.unobserver()
  }
}