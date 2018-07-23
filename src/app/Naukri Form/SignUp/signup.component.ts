import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector:'signup-form',
    templateUrl:'./signup.component.html'
})
export class SignUpForm{

    title="Sign Up";

    constructor( private routers:Router){}

    submit() {
        this.routers.navigate(['/login'])
      }
}