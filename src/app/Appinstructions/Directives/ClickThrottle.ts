import { Directive, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/throttleTime';
import { Subscription } from 'rxjs/Subscription';

/**
 *  <div (click.throttle)="" throttle="500"> </div>
 * 
 */
@Directive({
    selector: "[click.throttle]"
})
export class ElementClickThrottle {
    private throttle: number = 500
    private eventUnobserver: Function;

    private clickEvent: Subject<any> = new Subject<any>()
    private clickObser: Subscription
    @Output("click.throttle") throttleEvent = new EventEmitter<Event>();
    constructor(private render: Renderer2, private ele: ElementRef) {
        this.throttle = parseInt((this.ele.nativeElement as HTMLElement).attributes["throttle"]) || 500
     }
    ngOnInit() {
        this.eventUnobserver = this.render.listen(this.ele.nativeElement, "click", (event) => {
            this.clickEvent.next(event)
        })
        this.clickObser = this.clickEvent.throttleTime(this.throttle).subscribe((event) => {
            this.throttleEvent.emit(event)
        })
    }
    ngOnDestroy() {
        this.eventUnobserver && this.eventUnobserver()
        this.clickObser && this.clickObser.unsubscribe()
    }
}