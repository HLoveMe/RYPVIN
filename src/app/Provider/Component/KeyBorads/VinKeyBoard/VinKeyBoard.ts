import { Component ,ChangeDetectionStrategy} from "@angular/core";
import { ViewController } from "ionic-angular";


@Component({
    selector:"vinkeyboard",
    templateUrl:"VinKeyBoard.html",
    styles:[`:host{display:block;}`],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class VinKeyBoard{
    constructor (
        private viewC:ViewController
    ) {
        
    }
    dismiss(event){
        this.viewC.dismiss()
    }
}