import {Component, ViewChild, ViewChildren} from '@angular/core'
import { ChildViewComponent } from '../childview/child.component';
import { QueryList } from '@angular/core';

@Component({
    selector:'group-component',
    templateUrl:'./group.component.html',


})

export class GroupComponent{
    @ViewChild(ChildViewComponent) c:ChildViewComponent;
    childNo:0;
sendingmsg(){
    this.c.heading="this heading is chan from parent";
    this.c.msg="message from parent"
}

@ViewChildren(ChildViewComponent) children:QueryList<ChildViewComponent>;
private childrenArray:Array<ChildViewComponent>;

ngAfterViewInit(){
    this.childrenArray=this.children.toArray();
}

SendMessageChildren(){
    this.childrenArray[this.childNo].heading="children from parent";
    this.childrenArray[this.childNo].msg="parrent sends msg";
    
}









    title="group is a type of forms ";


    public savedata(data){
        alert("name = "+data.name);
    }
 
}