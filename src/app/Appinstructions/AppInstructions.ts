
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexBoxCenter } from './Directives/Flex-Box-Center';
import { DisableScroll } from './Directives/DisableScroll';
import { KeyKoard } from "./Injectable/Key-board";
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FlexBoxCenter,
        DisableScroll
    ],
    exports:[
        FlexBoxCenter,
        DisableScroll
    ]
    ,providers:[
        KeyKoard
    ]

})
export class AppInstructions { }