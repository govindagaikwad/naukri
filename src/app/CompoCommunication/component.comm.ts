import { Component, Input, Output, EventEmitter } from "@angular/core";




@Component({
    selector: 'app-emp',
    templateUrl: './component.comm.html'

})
export class ComponentCommunication {
    @Input('name') employeeName: string;
    @Input('city') employeeCity: string;
    @Input('salary') employeeSalary: string;

    @Output() selectedRecord: EventEmitter<any> = new EventEmitter();


    passData() {
        let myData =
        {
            Name: this.employeeName,
            city: this.employeeCity,
            salary: this.employeeSalary
        }
        

        this.selectedRecord.emit(myData);

    }

}