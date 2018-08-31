

import { Component ,ChangeDetectionStrategy} from "@angular/core";

@Component({
    selector:"numberkeyboard",
    templateUrl:"./NumberKeyBoard.html",
    styles:[`:host{display:block;}`],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class NumberKeyboard{
    
}