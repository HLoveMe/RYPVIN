import { state, style ,trigger,transition,animate} from "@angular/animations";


export const CustomAnimation  = [
    trigger("CustomKeyBoard",[
        state("inactive",style({
            bottom:"-45rem"
        })),
        state("active",style({
            bottom: "0"
        })),
        transition("active<=>inactive",animate("250ms ease-in"))
    ]),
    trigger("NumberKeyBoard",[

    ])
]