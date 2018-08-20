
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexBoxCenter } from './Directives/Flex-Box-Center';
import { DisableScroll } from './Directives/DisableScroll';

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

})
export class AppInstructions { }