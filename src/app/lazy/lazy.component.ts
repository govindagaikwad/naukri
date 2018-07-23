import {Component, Input, Output, EventEmitter} from "@angular/core"


@Component({

selector:'App-Lazy',
templateUrl:'./lazy.component.html'


})

export class LazyLoading{
    @Input() studentName: string;
    @Input() studentContact: string;
    @Input() studentEmail: string;

    @Output() selectedRecord: EventEmitter<any> = new EventEmitter();


    passData() {
        let myData =
        {
            Name: this.studentName,
            contact: this.studentContact,
            email: this.studentEmail
        }

        this.selectedRecord.emit(myData);
    }

}