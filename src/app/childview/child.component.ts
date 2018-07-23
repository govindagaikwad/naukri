import { Component } from "@angular/core";


@Component({
    selector:'child-view',
    templateUrl:'./child.component.html'
})
export class ChildViewComponent{

    heading="This is child";
    msg="Message from child";

}