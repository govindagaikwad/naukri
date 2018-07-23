import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
    selector: 'Naukri-form',
    templateUrl: './form.component.html'
})

export class NaukriForm {
    title = "Complete Your Profile"
    public NoukriModel: FormGroup;
    year: any[12] = []
    years: number = 0 ;
    constructor(private routers:Router ) {
        for (let i = 0; i <=12; i++) {
            this.year[i] = this.years;
            this.years++;
        }
        this.NoukriModel = new FormGroup({

        })

    }
    SaveAndNext(){
        this.routers.navigate(['/naukrif2'])
    }
    
}