import { Component } from "@angular/core";
import { Router } from "@angular/router";



@Component({
    selector: 'login-form',
    templateUrl: './login.component.html'
})

export class LoginForm {

    title = "Login";

    constructor(private routers: Router) { }

    login() {
        this.routers.navigate(['/naukrif1'])
    }

    signup() {
        this.routers.navigate(['/signup']);
    }

}