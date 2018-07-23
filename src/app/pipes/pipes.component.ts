import { Component } from "@angular/core";


@Component({
    selector:'pipe-text',
    templateUrl:'./pipes.component.html'
})

export class PipesDemo{

name ="govinda gaikwad";
number=5;

jsonname={
    fname:"Govinda",
    lname:"Gaikwad",
    city:"A.nagar"
}
today = new Date();
amount="200";

}