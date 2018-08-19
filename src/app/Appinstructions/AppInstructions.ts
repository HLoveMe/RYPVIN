
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexBoxCenter } from './Directives/Flex-Box-Center';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FlexBoxCenter
    ],
    exports:[
        FlexBoxCenter
    ]

})
export class AppInstructions { }